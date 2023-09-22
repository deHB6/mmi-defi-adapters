import AaveV2PoolAvalancheAToken from '../../adapters/aave-v2/products/pool/metadata/avalanche.a-token.json'
import AaveV2PoolAvalancheStableDebtToken from '../../adapters/aave-v2/products/pool/metadata/avalanche.stable-debt-token.json'
import AaveV2PoolAvalancheVariableDebtToken from '../../adapters/aave-v2/products/pool/metadata/avalanche.variable-debt-token.json'
import AaveV2PoolEthereumAToken from '../../adapters/aave-v2/products/pool/metadata/ethereum.a-token.json'
import AaveV2PoolEthereumStableDebtToken from '../../adapters/aave-v2/products/pool/metadata/ethereum.stable-debt-token.json'
import AaveV2PoolEthereumVariableDebtToken from '../../adapters/aave-v2/products/pool/metadata/ethereum.variable-debt-token.json'
import AaveV2PoolPolygonAToken from '../../adapters/aave-v2/products/pool/metadata/polygon.a-token.json'
import AaveV2PoolPolygonStableDebtToken from '../../adapters/aave-v2/products/pool/metadata/polygon.stable-debt-token.json'
import AaveV2PoolPolygonVariableDebtToken from '../../adapters/aave-v2/products/pool/metadata/polygon.variable-debt-token.json'
import { Protocol } from '../../adapters/protocols'
import StargatePoolArbitrumLpToken from '../../adapters/stargate/products/pool/metadata/arbitrum.lp-token.json'
import StargatePoolEthereumLpToken from '../../adapters/stargate/products/pool/metadata/ethereum.lp-token.json'
import StargateVestingArbitrumVestingToken from '../../adapters/stargate/products/vesting/metadata/arbitrum.vesting-token.json'
import StargateVestingEthereumVestingToken from '../../adapters/stargate/products/vesting/metadata/ethereum.vesting-token.json'
import { Json } from '../../types/json'
import { Chain } from '../constants/chains'

export const MetadataFiles = new Map<string, Json>([
  [
    metadataKey({
      protocolId: Protocol.Stargate,
      productId: 'pool',
      chainId: Chain.Ethereum,
      fileKey: 'lp-token',
    }),
    StargatePoolEthereumLpToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.Stargate,
      productId: 'vesting',
      chainId: Chain.Ethereum,
      fileKey: 'vesting-token',
    }),
    StargateVestingEthereumVestingToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.Stargate,
      productId: 'pool',
      chainId: Chain.Arbitrum,
      fileKey: 'lp-token',
    }),
    StargatePoolArbitrumLpToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.Stargate,
      productId: 'vesting',
      chainId: Chain.Arbitrum,
      fileKey: 'vesting-token',
    }),
    StargateVestingArbitrumVestingToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Ethereum,
      fileKey: 'a-token',
    }),
    AaveV2PoolEthereumAToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Ethereum,
      fileKey: 'stable-debt-token',
    }),
    AaveV2PoolEthereumStableDebtToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Ethereum,
      fileKey: 'variable-debt-token',
    }),
    AaveV2PoolEthereumVariableDebtToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Polygon,
      fileKey: 'a-token',
    }),
    AaveV2PoolPolygonAToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Polygon,
      fileKey: 'stable-debt-token',
    }),
    AaveV2PoolPolygonStableDebtToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Polygon,
      fileKey: 'variable-debt-token',
    }),
    AaveV2PoolPolygonVariableDebtToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Avalanche,
      fileKey: 'a-token',
    }),
    AaveV2PoolAvalancheAToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Avalanche,
      fileKey: 'stable-debt-token',
    }),
    AaveV2PoolAvalancheStableDebtToken,
  ],
  [
    metadataKey({
      protocolId: Protocol.AaveV2,
      productId: 'pool',
      chainId: Chain.Avalanche,
      fileKey: 'variable-debt-token',
    }),
    AaveV2PoolAvalancheVariableDebtToken,
  ],
])

export function metadataKey({
  protocolId,
  productId,
  chainId,
  fileKey,
}: {
  protocolId: Protocol
  productId: string
  chainId: Chain
  fileKey: string
}) {
  return `${protocolId}.${productId}.${chainId}.${fileKey}`
}
