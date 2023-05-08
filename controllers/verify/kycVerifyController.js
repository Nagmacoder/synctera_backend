const kycVerifyService = require("../../services/verify/kycVerifyService");

exports.kycVerification = async (req, res) => {
  try {
    const verification = await kycVerifyService.kycVerification(req.body);
    res.status(200).json(verification);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};

exports.getkycVerification = async (req, res) => {
  try {
    const verification = await kycVerifyService.getkycVerification();
    res.status(200).json(verification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getkycById = async (req, res) => {
  const { id } = req.params;
  try {
    const verification = await kycVerifyService.getkycById(id);
    res.status(200).json(verification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
