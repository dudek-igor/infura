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
/**
 * @example Archive Nodes
 */

const infuraProviderV2 = new ethers.InfuraProvider(
  "mainnet",
  process.env.INFURA_API_KEY
);

const main = async () => {
  const userAddress = "0x0000000000000000000000000000000000000000";
  const startBlock = 11565019;
  const endBlock = 13916165;

  // Get current balance
  const currentBalance = await infuraProviderV2
    .getBalance(userAddress)
    .then((bal) => ethers.formatEther(bal));

  // Get balance from the start of 2021
  const startBalance = await infuraProviderV2
    .getBalance(userAddress, startBlock)
    .then((bal) => ethers.formatEther(bal));

  // Get balance from the end of 2021
  const endBalance = await infuraProviderV2
    .getBalance(userAddress, endBlock)
    .then((bal) => ethers.formatEther(bal));

  // Get number of transactions for start of year
  const startTxnCount = await infuraProviderV2.getTransactionCount(
    userAddress,
    startBlock
  );

  // Get number of transactions for end of year
  const endTxnCount = await infuraProviderV2.getTransactionCount(
    userAddress,
    endBlock
  );

  // Difference between start and end balances
  const diffBal = endBalance - startBalance;

  // Difference between start and end transaction counts
  const diffTxns = endTxnCount - startTxnCount;

  console.log("User:", userAddress);
  console.log("Current ETH:", currentBalance);
  console.log("Start of 2021 bal: ", startBalance);
  console.log("End of 2021 bal: ", endBalance);
  console.log("Bal Diff:", diffBal);
  console.log("Num Of Transactions:", diffTxns);
};

main();
