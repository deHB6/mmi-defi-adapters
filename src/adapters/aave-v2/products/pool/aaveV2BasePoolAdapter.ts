import { formatUnits } from 'ethers'
import { SimplePoolAdapter } from '../../../../core/adapters/SimplePoolAdapter'
import { Chain } from '../../../../core/constants/chains'
import { IMetadataBuilder } from '../../../../core/decorators/cacheToFile'
import {
  Erc20Metadata,
  getThinTokenMetadata,
} from '../../../../core/utils/getTokenMetadata'
import { logger } from '../../../../core/utils/logger'
import {
  BasePricePerShareToken,
  BaseToken,
  GetAprInput,
  GetApyInput,
  GetEventsInput,
  GetTotalValueLockedInput,
  MovementsByBlock,
  ProtocolAprToken,
  ProtocolApyToken,
  ProtocolTotalValueLockedToken,
  TokenBalance,
  TokenType,
} from '../../../../types/adapter'
import {
  ProtocolDataProvider,
  ProtocolDataProvider__factory,
} from '../../contracts'
import { buildTrustAssetIconUrl } from '../../../../core/utils/buildIconUrl'

type AaveV2PoolMetadata = Record<
  string,
  {
    protocolToken: Erc20Metadata
    underlyingToken: Erc20Metadata & { iconUrl: string }
  }
>

// Aave tokens always pegged one to one to underlying
const PRICE_PEGGED_TO_ONE = 1
export abstract class AaveV2BasePoolAdapter
  extends SimplePoolAdapter
  implements IMetadataBuilder
{
  product!: string

  async getProtocolTokens(): Promise<Erc20Metadata[]> {
    return Object.values(await this.buildMetadata()).map(
      ({ protocolToken }) => protocolToken,
    )
  }

  async getClaimedRewards(_input: GetEventsInput): Promise<MovementsByBlock[]> {
    throw new Error('Not Implemented')
  }

  async getTotalValueLocked(
    _input: GetTotalValueLockedInput,
  ): Promise<ProtocolTotalValueLockedToken[]> {
    throw new Error('Not Implemented')
  }

  async getApy(_input: GetApyInput): Promise<ProtocolApyToken> {
    throw new Error('Not Implemented')
  }

  async getApr(_input: GetAprInput): Promise<ProtocolAprToken> {
    throw new Error('Not Implemented')
  }

  async buildMetadata() {
    const contractAddresses: Partial<Record<Chain, string>> = {
      [Chain.Ethereum]: '0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d',
      [Chain.Polygon]: '0x7551b5D2763519d4e37e8B81929D336De671d46d',
      [Chain.Avalanche]: '0x65285E9dfab318f57051ab2b139ccCf232945451',
    }

    const protocolDataProviderContract = ProtocolDataProvider__factory.connect(
      contractAddresses[this.chainId]!,
      this.provider,
    )

    const reserveTokens =
      await protocolDataProviderContract.getAllReservesTokens()

    const metadataObject: AaveV2PoolMetadata = {}
    for (const { tokenAddress } of reserveTokens) {
      const reserveTokenAddresses =
        await protocolDataProviderContract.getReserveTokensAddresses(
          tokenAddress,
        )

      const underlyingTokenMetadata = await getThinTokenMetadata(
        tokenAddress,
        this.chainId,
      )

      const setProtocolToken = async (
        tokenAddress: string,
        tokenMetadataObject: AaveV2PoolMetadata,
      ) => {
        const protocolTokenMetadata = await getThinTokenMetadata(
          tokenAddress,
          this.chainId,
        )
        tokenMetadataObject[protocolTokenMetadata.address] = {
          protocolToken: protocolTokenMetadata,
          underlyingToken: {
            ...underlyingTokenMetadata,
            iconUrl: buildTrustAssetIconUrl(
              this.chainId,
              underlyingTokenMetadata.address,
            ),
          },
        }
      }

      setProtocolToken(
        this.getReserveTokenAddress(reserveTokenAddresses),
        metadataObject,
      )
    }

    return metadataObject
  }

  protected async fetchProtocolTokenMetadata(
    protocolTokenAddress: string,
  ): Promise<Erc20Metadata> {
    const { protocolToken } = await this.fetchPoolMetadata(protocolTokenAddress)

    return protocolToken
  }

  protected async getUnderlyingTokens(
    protocolTokenAddress: string,
  ): Promise<Erc20Metadata[]> {
    const { underlyingToken } = await this.fetchPoolMetadata(
      protocolTokenAddress,
    )

    return [underlyingToken]
  }

  protected async getUnderlyingTokenBalances(
    protocolTokenBalance: TokenBalance,
  ): Promise<BaseToken[]> {
    const { underlyingToken } = await this.fetchPoolMetadata(
      protocolTokenBalance.address,
    )

    const underlyingTokenBalance = {
      ...underlyingToken,
      balanceRaw: protocolTokenBalance.balanceRaw,
      balance: protocolTokenBalance.balance,
      type: TokenType.Underlying,
      iconUrl: underlyingToken.iconUrl,
    }

    return [underlyingTokenBalance]
  }

  protected async getUnderlyingTokenPricesPerShare(
    protocolTokenMetadata: Erc20Metadata,
    _blockNumber?: number | undefined,
  ): Promise<BasePricePerShareToken[]> {
    const { underlyingToken } = await this.fetchPoolMetadata(
      protocolTokenMetadata.address,
    )

    // Aave tokens always pegged one to one to underlying
    const pricePerShareRaw = BigInt(
      PRICE_PEGGED_TO_ONE * 10 ** protocolTokenMetadata.decimals,
    )

    const pricePerShare = formatUnits(
      pricePerShareRaw,
      underlyingToken.decimals,
    )

    return [
      {
        ...underlyingToken,
        type: TokenType.Underlying,
        pricePerShareRaw,
        pricePerShare,
      },
    ]
  }

  protected abstract getReserveTokenAddress(
    reserveTokenAddresses: Awaited<
      ReturnType<ProtocolDataProvider['getReserveTokensAddresses']>
    >,
  ): string

  private async fetchPoolMetadata(protocolTokenAddress: string) {
    const poolMetadata = (await this.buildMetadata())[protocolTokenAddress]

    if (!poolMetadata) {
      logger.error({ protocolTokenAddress }, 'Protocol token pool not found')
      throw new Error('Protocol token pool not found')
    }

    return poolMetadata
  }
}
