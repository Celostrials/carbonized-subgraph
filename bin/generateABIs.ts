#!/usr/bin/env -S yarn ts-node --script-mode -T
import * as factories from "../types";
import {existsSync, mkdirSync, writeFileSync} from "fs";

export async function generateABIs() {
  const contracts = Object.keys(factories).map(factory => {
    return factory.split("__")[0];
  });
  Object.keys(factories).forEach(factoryName => {
    const contractAbi = factories[factoryName].abi;
    const name = factoryName.split("__")[0];
    if (!existsSync(`./abis`)) mkdirSync(`./abis`);
    if (!contractAbi) console.log(name);
    writeFileSync(`./abis/${name}.json`, JSON.stringify(contractAbi, null, 2));
  });
}

generateABIs().finally(async () => {
  console.log("ABIs generated");
  process.exit(0);
});
