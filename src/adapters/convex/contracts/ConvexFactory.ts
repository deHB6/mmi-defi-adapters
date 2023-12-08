/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ConvexFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FEE_DENOMINATOR"
      | "MaxFees"
      | "addPool"
      | "claimRewards"
      | "crv"
      | "deposit"
      | "depositAll"
      | "distributionAddressId"
      | "earmarkFees"
      | "earmarkIncentive"
      | "earmarkRewards"
      | "feeDistro"
      | "feeManager"
      | "feeToken"
      | "gaugeMap"
      | "isShutdown"
      | "lockFees"
      | "lockIncentive"
      | "lockRewards"
      | "minter"
      | "owner"
      | "platformFee"
      | "poolInfo"
      | "poolLength"
      | "poolManager"
      | "registry"
      | "rewardArbitrator"
      | "rewardClaimed"
      | "rewardFactory"
      | "setArbitrator"
      | "setFactories"
      | "setFeeInfo"
      | "setFeeManager"
      | "setFees"
      | "setGaugeRedirect"
      | "setOwner"
      | "setPoolManager"
      | "setRewardContracts"
      | "setTreasury"
      | "setVoteDelegate"
      | "shutdownPool"
      | "shutdownSystem"
      | "staker"
      | "stakerIncentive"
      | "stakerRewards"
      | "stashFactory"
      | "tokenFactory"
      | "treasury"
      | "vote"
      | "voteDelegate"
      | "voteGaugeWeight"
      | "voteOwnership"
      | "voteParameter"
      | "withdraw"
      | "withdrawAll"
      | "withdrawTo"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Deposited" | "Withdrawn"): EventFragment;

  encodeFunctionData(
    functionFragment: "FEE_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MaxFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addPool",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "crv", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAll",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "distributionAddressId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earmarkFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earmarkIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earmarkRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "feeDistro", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gaugeMap",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lockFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lockIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardArbitrator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardClaimed",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setArbitrator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFactories",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGaugeRedirect",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardContracts",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasury",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoteDelegate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "shutdownPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shutdownSystem",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "staker", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakerIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakerRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stashFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "voteDelegate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "voteGaugeWeight",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "voteOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "voteParameter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MaxFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributionAddressId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "earmarkFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "earmarkIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "earmarkRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeDistro", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gaugeMap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardArbitrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setArbitrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFactories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGaugeRedirect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVoteDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shutdownPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shutdownSystem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakerIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakerRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stashFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voteDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteGaugeWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
}

export namespace DepositedEvent {
  export type InputTuple = [
    user: AddressLike,
    poolid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, poolid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    poolid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    user: AddressLike,
    poolid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, poolid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    poolid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ConvexFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ConvexFactory;
  waitForDeployment(): Promise<this>;

  interface: ConvexFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  FEE_DENOMINATOR: TypedContractMethod<[], [bigint], "view">;

  MaxFees: TypedContractMethod<[], [bigint], "view">;

  addPool: TypedContractMethod<
    [_lptoken: AddressLike, _gauge: AddressLike, _stashVersion: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  claimRewards: TypedContractMethod<
    [_pid: BigNumberish, _gauge: AddressLike],
    [boolean],
    "nonpayable"
  >;

  crv: TypedContractMethod<[], [string], "view">;

  deposit: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish, _stake: boolean],
    [boolean],
    "nonpayable"
  >;

  depositAll: TypedContractMethod<
    [_pid: BigNumberish, _stake: boolean],
    [boolean],
    "nonpayable"
  >;

  distributionAddressId: TypedContractMethod<[], [bigint], "view">;

  earmarkFees: TypedContractMethod<[], [boolean], "nonpayable">;

  earmarkIncentive: TypedContractMethod<[], [bigint], "view">;

  earmarkRewards: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  feeDistro: TypedContractMethod<[], [string], "view">;

  feeManager: TypedContractMethod<[], [string], "view">;

  feeToken: TypedContractMethod<[], [string], "view">;

  gaugeMap: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isShutdown: TypedContractMethod<[], [boolean], "view">;

  lockFees: TypedContractMethod<[], [string], "view">;

  lockIncentive: TypedContractMethod<[], [bigint], "view">;

  lockRewards: TypedContractMethod<[], [string], "view">;

  minter: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  platformFee: TypedContractMethod<[], [bigint], "view">;

  poolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, string, string, boolean] & {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
      }
    ],
    "view"
  >;

  poolLength: TypedContractMethod<[], [bigint], "view">;

  poolManager: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  rewardArbitrator: TypedContractMethod<[], [string], "view">;

  rewardClaimed: TypedContractMethod<
    [_pid: BigNumberish, _address: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  rewardFactory: TypedContractMethod<[], [string], "view">;

  setArbitrator: TypedContractMethod<[_arb: AddressLike], [void], "nonpayable">;

  setFactories: TypedContractMethod<
    [_rfactory: AddressLike, _sfactory: AddressLike, _tfactory: AddressLike],
    [void],
    "nonpayable"
  >;

  setFeeInfo: TypedContractMethod<[], [void], "nonpayable">;

  setFeeManager: TypedContractMethod<
    [_feeM: AddressLike],
    [void],
    "nonpayable"
  >;

  setFees: TypedContractMethod<
    [
      _lockFees: BigNumberish,
      _stakerFees: BigNumberish,
      _callerFees: BigNumberish,
      _platform: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setGaugeRedirect: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setPoolManager: TypedContractMethod<
    [_poolM: AddressLike],
    [void],
    "nonpayable"
  >;

  setRewardContracts: TypedContractMethod<
    [_rewards: AddressLike, _stakerRewards: AddressLike],
    [void],
    "nonpayable"
  >;

  setTreasury: TypedContractMethod<
    [_treasury: AddressLike],
    [void],
    "nonpayable"
  >;

  setVoteDelegate: TypedContractMethod<
    [_voteDelegate: AddressLike],
    [void],
    "nonpayable"
  >;

  shutdownPool: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  shutdownSystem: TypedContractMethod<[], [void], "nonpayable">;

  staker: TypedContractMethod<[], [string], "view">;

  stakerIncentive: TypedContractMethod<[], [bigint], "view">;

  stakerRewards: TypedContractMethod<[], [string], "view">;

  stashFactory: TypedContractMethod<[], [string], "view">;

  tokenFactory: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  vote: TypedContractMethod<
    [_voteId: BigNumberish, _votingAddress: AddressLike, _support: boolean],
    [boolean],
    "nonpayable"
  >;

  voteDelegate: TypedContractMethod<[], [string], "view">;

  voteGaugeWeight: TypedContractMethod<
    [_gauge: AddressLike[], _weight: BigNumberish[]],
    [boolean],
    "nonpayable"
  >;

  voteOwnership: TypedContractMethod<[], [string], "view">;

  voteParameter: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  withdrawAll: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  withdrawTo: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish, _to: AddressLike],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FEE_DENOMINATOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MaxFees"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addPool"
  ): TypedContractMethod<
    [_lptoken: AddressLike, _gauge: AddressLike, _stashVersion: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimRewards"
  ): TypedContractMethod<
    [_pid: BigNumberish, _gauge: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "crv"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish, _stake: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositAll"
  ): TypedContractMethod<
    [_pid: BigNumberish, _stake: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributionAddressId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "earmarkFees"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "earmarkIncentive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "earmarkRewards"
  ): TypedContractMethod<[_pid: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "feeDistro"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gaugeMap"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isShutdown"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lockFees"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lockIncentive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lockRewards"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "platformFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "poolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, string, string, boolean] & {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "poolManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardArbitrator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardClaimed"
  ): TypedContractMethod<
    [_pid: BigNumberish, _address: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setArbitrator"
  ): TypedContractMethod<[_arb: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFactories"
  ): TypedContractMethod<
    [_rfactory: AddressLike, _sfactory: AddressLike, _tfactory: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeInfo"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeManager"
  ): TypedContractMethod<[_feeM: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFees"
  ): TypedContractMethod<
    [
      _lockFees: BigNumberish,
      _stakerFees: BigNumberish,
      _callerFees: BigNumberish,
      _platform: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGaugeRedirect"
  ): TypedContractMethod<[_pid: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPoolManager"
  ): TypedContractMethod<[_poolM: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardContracts"
  ): TypedContractMethod<
    [_rewards: AddressLike, _stakerRewards: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTreasury"
  ): TypedContractMethod<[_treasury: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVoteDelegate"
  ): TypedContractMethod<[_voteDelegate: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shutdownPool"
  ): TypedContractMethod<[_pid: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "shutdownSystem"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "staker"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stakerIncentive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stakerRewards"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stashFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [_voteId: BigNumberish, _votingAddress: AddressLike, _support: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "voteDelegate"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "voteGaugeWeight"
  ): TypedContractMethod<
    [_gauge: AddressLike[], _weight: BigNumberish[]],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "voteOwnership"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "voteParameter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawAll"
  ): TypedContractMethod<[_pid: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawTo"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish, _to: AddressLike],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Deposited(address,uint256,uint256)": TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;
    Deposited: TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;

    "Withdrawn(address,uint256,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
