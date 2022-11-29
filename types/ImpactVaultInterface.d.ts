/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ImpactVaultInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "asset()": FunctionFragment;
    "claim()": FunctionFragment;
    "convertToAsset(uint256)": FunctionFragment;
    "convertToYieldAsset(uint256)": FunctionFragment;
    "depositETH(address)": FunctionFragment;
    "getYield(address)": FunctionFragment;
    "totalYield()": FunctionFragment;
    "totalYieldUSD()": FunctionFragment;
    "withdrawAll(address,address)": FunctionFragment;
    "withdrawYieldAsset(uint256,address,address)": FunctionFragment;
    "withdrawals(address)": FunctionFragment;
    "yieldAsset()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "convertToAsset",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToYieldAsset",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "depositETH", values: [string]): string;
  encodeFunctionData(functionFragment: "getYield", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalYield",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalYieldUSD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawYieldAsset",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "withdrawals", values: [string]): string;
  encodeFunctionData(
    functionFragment: "yieldAsset",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertToAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToYieldAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getYield", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalYield", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalYieldUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawYieldAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldAsset", data: BytesLike): Result;

  events: {};
}

export class ImpactVaultInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ImpactVaultInterfaceInterface;

  functions: {
    asset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convertToAsset(
      _amountYieldAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convertToYieldAsset(
      _amountAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositETH(
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getYield(_address: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalYield(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalYieldUSD(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawAll(
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawYieldAsset(
      _amount: BigNumberish,
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawals(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { value: BigNumber; timestamp: BigNumber }
    >;

    yieldAsset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  asset(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convertToAsset(
    _amountYieldAsset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertToYieldAsset(
    _amountAsset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositETH(
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getYield(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalYield(overrides?: CallOverrides): Promise<BigNumber>;

  totalYieldUSD(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawAll(
    _receiver: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawYieldAsset(
    _amount: BigNumberish,
    _receiver: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawals(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { value: BigNumber; timestamp: BigNumber }
  >;

  yieldAsset(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    asset(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    convertToAsset(
      _amountYieldAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToYieldAsset(
      _amountAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositETH(_receiver: string, overrides?: CallOverrides): Promise<void>;

    getYield(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalYield(overrides?: CallOverrides): Promise<BigNumber>;

    totalYieldUSD(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAll(
      _receiver: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawYieldAsset(
      _amount: BigNumberish,
      _receiver: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawals(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { value: BigNumber; timestamp: BigNumber }
    >;

    yieldAsset(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    asset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convertToAsset(
      _amountYieldAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToYieldAsset(
      _amountAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositETH(
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getYield(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalYield(overrides?: CallOverrides): Promise<BigNumber>;

    totalYieldUSD(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAll(
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawYieldAsset(
      _amount: BigNumberish,
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawals(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    yieldAsset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    asset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convertToAsset(
      _amountYieldAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToYieldAsset(
      _amountAsset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositETH(
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getYield(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalYield(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalYieldUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawAll(
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawYieldAsset(
      _amount: BigNumberish,
      _receiver: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawals(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    yieldAsset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
