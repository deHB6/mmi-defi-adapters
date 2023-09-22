import { Chain } from '../core/constants/chains'
import { IProtocolAdapter, ProtocolAdapterParams } from '../types/adapter'
import { AaveV2ATokenPoolAdapter } from './aave-v2/products/pool/aaveV2ATokenPoolAdapter'
import { AaveV2StableDebtTokenPoolAdapter } from './aave-v2/products/pool/aaveV2StableDebtTokenPoolAdapter'
import { AaveV2VariableDebtTokenPoolAdapter } from './aave-v2/products/pool/aaveV2VariableDebtTokenPoolAdapter'
import { ExampleProductAdapter } from './example/products/example-product/exampleProductAdapter'
import { Protocol } from './protocols'
import { StargatePoolAdapter } from './stargate/products/pool/stargatePoolAdapter'
import { StargateVestingAdapter } from './stargate/products/vesting/stargateVestingAdapter'

export const supportedProtocols: Record<
  Protocol,
  Partial<
    Record<Chain, (new (input: ProtocolAdapterParams) => IProtocolAdapter)[]>
  >
> = {
  [Protocol.Stargate]: {
    [Chain.Ethereum]: [StargatePoolAdapter, StargateVestingAdapter],
    [Chain.Arbitrum]: [StargatePoolAdapter, StargateVestingAdapter],
  },

  [Protocol.Example]: {
    [Chain.Ethereum]: [ExampleProductAdapter],
  },

  [Protocol.AaveV2]: {
    [Chain.Ethereum]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
  },
}
