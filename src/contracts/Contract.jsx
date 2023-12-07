import { ethers } from "ethers";
import {RAFFLE_ADDRESS} from "../constants/address.js";
import {RAFFLE_ABI} from "../constants/abi.js";
import { quais } from "quais";

export const Contract = () => {

  const provider = new quais.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new quais.Contract(RAFFLE_ADDRESS, RAFFLE_ABI, signer);
  return contract;
}