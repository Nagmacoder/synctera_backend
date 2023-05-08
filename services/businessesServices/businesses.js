const axios = require("axios");
const config = require("../../config/config");

exports.createBusiness = async (businessData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/businesses`,
      businessData,
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
    throw new Error("Unable to create businesses Account.");
  }
};

exports.getBusiness = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/businesses`, {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get businesses Account.");
  }
};

exports.getBusinessById = async (businessId) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/businesses/${businessId}`,
      {
        headers: { Authorization: `Bearer ${config.API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get business account with this id.");
  }
};
