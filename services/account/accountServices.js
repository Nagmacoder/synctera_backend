const axios = require("axios");
const config = require("../../config/config");

exports.createBaseAccount = async (accountData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/accounts`,
      accountData,
      {
        headers: {
          Authorization: `Bearer ${config.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to create Base Account.");
  }
};

exports.createBaseAccountTemp = async (accountData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/accounts/templates`,
      accountData,
      {
        headers: {
          Authorization: `Bearer ${config.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to create Base Account Template.");
  }
};

exports.listAccount = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get Accounts.");
  }
};
