require("dotenv").config();
const axios = require("axios");

const infuraApiKey = process.env.INFURA_API_KEY;

axios
  .post(`https://mainnet.infura.io/v3/${infuraApiKey}`, {
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
