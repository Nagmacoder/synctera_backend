const axios = require("axios");
const config = require("../../config/config");

exports.kycVerification = async (kycverificationData) => {
  //   const { personId, verificationType, verificationData } = kycverificationData;

  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/verifications/verify`,
      kycverificationData,
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
    throw new Error("Unable to complete KYC/KYB verification.");
  }
};

exports.getkycVerification = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/verifications`, {
      headers: { Authorization: `Bearer ${config.API_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting in KYC verifications");
  }
};

exports.getkycById = async () => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/verifications/${id}`,
      {
        headers: { Authorization: `Bearer ${config.API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error getting in KYC verifications with ID ${id}`);
  }
};
