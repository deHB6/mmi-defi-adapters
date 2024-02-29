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

export interface ConvexFactorySidechainInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FEE_DENOMINATOR"
      | "MaxFees"
      | "acceptPendingOwner"
      | "activeMap"
      | "addPool"
      | "calculatePlatformFees"
      | "claimCrv"
      | "deposit"
      | "depositAll"
      | "factoryCrv"
      | "feeDeposit"
      | "fees"
      | "isShutdown"
      | "owner"
      | "pendingOwner"
      | "poolInfo"
      | "poolLength"
      | "poolManager"
      | "rescueManager"
      | "rescueToken"
      | "rewardFactory"
      | "rewardManager"
      | "setFactoryCrv"
      | "setFeeDeposit"
      | "setFees"
      | "setPendingOwner"
      | "setPoolManager"
      | "setRescueManager"
      | "setRewardFactory"
      | "setRewardManager"
      | "shutdownBalances"
      | "shutdownPool"
      | "shutdownSystem"
      | "staker"
      | "withdrawTo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CrvFactorySet"
      | "Deposited"
      | "OwnerChanged"
      | "SetPendingOwner"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "FEE_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MaxFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptPendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeMap",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addPool",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePlatformFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimCrv",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "factoryCrv",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
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
  encodeFunctionData(
    functionFragment: "rescueManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueToken",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFactoryCrv",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDeposit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRescueManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "shutdownBalances",
    values: [BigNumberish]
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
    functionFragment: "withdrawTo",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MaxFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptPendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "activeMap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculatePlatformFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimCrv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factoryCrv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFactoryCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRescueManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shutdownBalances",
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
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
}

export namespace CrvFactorySetEvent {
  export type InputTuple = [_factory: AddressLike, _crv: AddressLike];
  export type OutputTuple = [_factory: string, _crv: string];
  export interface OutputObject {
    _factory: string;
    _crv: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace OwnerChangedEvent {
  export type InputTuple = [_address: AddressLike];
  export type OutputTuple = [_address: string];
  export interface OutputObject {
    _address: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetPendingOwnerEvent {
  export type InputTuple = [_address: AddressLike];
  export type OutputTuple = [_address: string];
  export interface OutputObject {
    _address: string;
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

export interface ConvexFactorySidechain extends BaseContract {
  connect(runner?: ContractRunner | null): ConvexFactorySidechain;
  waitForDeployment(): Promise<this>;

  interface: ConvexFactorySidechainInterface;

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

  acceptPendingOwner: TypedContractMethod<[], [void], "nonpayable">;

  activeMap: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  addPool: TypedContractMethod<
    [_lptoken: AddressLike, _gauge: AddressLike, _factory: AddressLike],
    [boolean],
    "nonpayable"
  >;

  calculatePlatformFees: TypedContractMethod<
    [_amount: BigNumberish],
    [bigint],
    "view"
  >;

  claimCrv: TypedContractMethod<
    [_pid: BigNumberish, _gauge: AddressLike],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  depositAll: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  factoryCrv: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  feeDeposit: TypedContractMethod<[], [string], "view">;

  fees: TypedContractMethod<[], [bigint], "view">;

  isShutdown: TypedContractMethod<[], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  poolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, boolean, string] & {
        lptoken: string;
        gauge: string;
        rewards: string;
        shutdown: boolean;
        factory: string;
      }
    ],
    "view"
  >;

  poolLength: TypedContractMethod<[], [bigint], "view">;

  poolManager: TypedContractMethod<[], [string], "view">;

  rescueManager: TypedContractMethod<[], [string], "view">;

  rescueToken: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardFactory: TypedContractMethod<[], [string], "view">;

  rewardManager: TypedContractMethod<[], [string], "view">;

  setFactoryCrv: TypedContractMethod<
    [_factory: AddressLike, _crv: AddressLike],
    [void],
    "nonpayable"
  >;

  setFeeDeposit: TypedContractMethod<
    [_deposit: AddressLike],
    [void],
    "nonpayable"
  >;

  setFees: TypedContractMethod<
    [_platformFees: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPendingOwner: TypedContractMethod<
    [_po: AddressLike],
    [void],
    "nonpayable"
  >;

  setPoolManager: TypedContractMethod<
    [_poolM: AddressLike],
    [void],
    "nonpayable"
  >;

  setRescueManager: TypedContractMethod<
    [_rescueM: AddressLike],
    [void],
    "nonpayable"
  >;

  setRewardFactory: TypedContractMethod<
    [_rfactory: AddressLike],
    [void],
    "nonpayable"
  >;

  setRewardManager: TypedContractMethod<
    [_rewardM: AddressLike],
    [void],
    "nonpayable"
  >;

  shutdownBalances: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  shutdownPool: TypedContractMethod<
    [_pid: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  shutdownSystem: TypedContractMethod<[], [void], "nonpayable">;

  staker: TypedContractMethod<[], [string], "view">;

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
    nameOrSignature: "acceptPendingOwner"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "activeMap"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "addPool"
  ): TypedContractMethod<
    [_lptoken: AddressLike, _gauge: AddressLike, _factory: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "calculatePlatformFees"
  ): TypedContractMethod<[_amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimCrv"
  ): TypedContractMethod<
    [_pid: BigNumberish, _gauge: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositAll"
  ): TypedContractMethod<[_pid: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "factoryCrv"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "feeDeposit"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fees"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isShutdown"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, boolean, string] & {
        lptoken: string;
        gauge: string;
        rewards: string;
        shutdown: boolean;
        factory: string;
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
    nameOrSignature: "rescueManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rescueToken"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFactoryCrv"
  ): TypedContractMethod<
    [_factory: AddressLike, _crv: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeDeposit"
  ): TypedContractMethod<[_deposit: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFees"
  ): TypedContractMethod<[_platformFees: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingOwner"
  ): TypedContractMethod<[_po: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPoolManager"
  ): TypedContractMethod<[_poolM: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRescueManager"
  ): TypedContractMethod<[_rescueM: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardFactory"
  ): TypedContractMethod<[_rfactory: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardManager"
  ): TypedContractMethod<[_rewardM: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shutdownBalances"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
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
    nameOrSignature: "withdrawTo"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish, _to: AddressLike],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "CrvFactorySet"
  ): TypedContractEvent<
    CrvFactorySetEvent.InputTuple,
    CrvFactorySetEvent.OutputTuple,
    CrvFactorySetEvent.OutputObject
  >;
  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerChanged"
  ): TypedContractEvent<
    OwnerChangedEvent.InputTuple,
    OwnerChangedEvent.OutputTuple,
    OwnerChangedEvent.OutputObject
  >;
  getEvent(
    key: "SetPendingOwner"
  ): TypedContractEvent<
    SetPendingOwnerEvent.InputTuple,
    SetPendingOwnerEvent.OutputTuple,
    SetPendingOwnerEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "CrvFactorySet(address,address)": TypedContractEvent<
      CrvFactorySetEvent.InputTuple,
      CrvFactorySetEvent.OutputTuple,
      CrvFactorySetEvent.OutputObject
    >;
    CrvFactorySet: TypedContractEvent<
      CrvFactorySetEvent.InputTuple,
      CrvFactorySetEvent.OutputTuple,
      CrvFactorySetEvent.OutputObject
    >;

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

    "OwnerChanged(address)": TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
    OwnerChanged: TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;

    "SetPendingOwner(address)": TypedContractEvent<
      SetPendingOwnerEvent.InputTuple,
      SetPendingOwnerEvent.OutputTuple,
      SetPendingOwnerEvent.OutputObject
    >;
    SetPendingOwner: TypedContractEvent<
      SetPendingOwnerEvent.InputTuple,
      SetPendingOwnerEvent.OutputTuple,
      SetPendingOwnerEvent.OutputObject
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
