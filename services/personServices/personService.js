const axios = require("axios");
const config = require("../../config/config");

exports.createPerson = async (personData) => {
  try {
    const response = await axios.post(
      `${config.API_BASE_URL}/persons`,
      personData,
      {
        headers: {
          Authorization: `Bearer ${config.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Unable to create person.");
  }
};

exports.getPersons = async () => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/persons`, {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get person Account.");
  }
};

exports.getPersonById = async (personId) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/persons/${personId}`,
      {
        headers: { Authorization: `Bearer ${config.API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get persons with this id.");
  }
};
