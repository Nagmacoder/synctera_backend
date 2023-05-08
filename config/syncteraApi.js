const axios = require("axios");
const { SYNCTERA_API_KEY } = require("./config");

const syncteraApi = axios.create({
  baseURL: "https://api.synctera.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SYNCTERA_API_KEY}`,
  },
});

module.exports = syncteraApi;
