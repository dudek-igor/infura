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
