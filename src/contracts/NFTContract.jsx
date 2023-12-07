import { ethers } from "ethers";
import {NFT_ADDRESS} from "../constants/address.js";
import {NFT_ABI} from "../constants/abi.js";
import { quais } from "quais";

export const NFTContract = () => {

  const provider = new quais.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new quais.Contract(NFT_ADDRESS, NFT_ABI, signer);
  return contract;
}