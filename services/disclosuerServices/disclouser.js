const axios = require("axios");
const config = require("../../config/config");

exports.recordDisclosureAcceptance = async (disclosureData) => {
  // const { personId, acceptanceType, dateAccepted } = disclosureData;

  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/disclosures`,
      disclosureData,
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
    throw new Error("Unable to record disclosure acceptance.");
  }
};

exports.getDisclosures = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/disclosures`, {
      headers: { Authorization: `Bearer ${config.API_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting disclosures");
  }
};

exports.getDisclosureById = async (id) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/disclosures/${id}`,
      {
        headers: { Authorization: `Bearer ${config.API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error getting disclosure with ID ${id}`);
  }
};
