const disclosuerService = require("../../services/disclosuerServices/disclouser");

exports.recordDisclosureAcceptance = async (req, res) => {
  try {
    const disclosure = await disclosuerService.recordDisclosureAcceptance(
      req.body
    );
    res.status(200).json(disclosure);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.getDisclosures = async (req, res) => {
  try {
    const disclosures = await disclosuerService.getDisclosures();
    res.status(200).json(disclosures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getDisclosureById = async (req, res) => {
  const { id } = req.params;
  try {
    const disclosure = await disclosuerService.getDisclosureById(id);
    res.status(200).json(disclosure);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
