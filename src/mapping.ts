import {BigInt} from "@graphprotocol/graph-ts";
import {
  CarbonizedToken,
  DecarbonizedToken
} from "../generated/CarbonizedCollection/CarbonizedCollection";
import {CarbonizedNFT} from "../generated/schema";

export function handleCarbonized(event: CarbonizedToken): void {
  let carbonizedNFT = CarbonizedNFT.load(event.params.tokenId.toHex());
  if (!carbonizedNFT) {
    carbonizedNFT = new CarbonizedNFT(event.params.tokenId.toHex());
  }
  carbonizedNFT.staked = carbonizedNFT.staked.plus(event.params.amount);
  carbonizedNFT.save();
}

export function handleDecarbonized(event: DecarbonizedToken): void {
  let carbonizedNFT = CarbonizedNFT.load(event.params.tokenId.toHex());
  if (!carbonizedNFT) return;
  carbonizedNFT.staked = new BigInt(0);
  carbonizedNFT.save();
}
