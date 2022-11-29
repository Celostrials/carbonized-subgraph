/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICarbonizerDeployer,
  ICarbonizerDeployerInterface,
} from "../ICarbonizerDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_carbonizedCollection",
        type: "address",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICarbonizerDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): ICarbonizerDeployerInterface {
    return new utils.Interface(_abi) as ICarbonizerDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICarbonizerDeployer {
    return new Contract(address, _abi, signerOrProvider) as ICarbonizerDeployer;
  }
}