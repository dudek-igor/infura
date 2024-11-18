require("dotenv").config();
const axios = require("axios");
const { ethers } = require("ethers");
/**
 * @constans
 */
const ETH_MAINNET = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
/**
 * @example Axios Example
 */
axios
  .post(ETH_MAINNET, {
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 1,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * @example Ether Example
 */
const InfuraProvider = new ethers.JsonRpcProvider(ETH_MAINNET);

InfuraProvider.getBlock()
  .then((block) => {
    console.log(block);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * @example Web3 example
 */
const { Web3 } = require("web3");
const web3Provider = new Web3.providers.HttpProvider(ETH_MAINNET);
const web3 = new Web3(web3Provider);

web3.eth
  .getBlockNumber()
  .then((result) => {
    console.log("Latest Ethereum Block is ", result);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * @example Infura Gas Fee
 */
const chainId = 1; // https://docs.metamask.io/services/get-started/endpoints/#gas-api

axios
  .get(
    `https://gas.api.infura.io/v3/${process.env.INFURA_API_KEY}/networks/${chainId}/suggestedGasFees`
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
