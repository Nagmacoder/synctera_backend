const businessService = require("../../services/businessesServices/businesses");

exports.createBusiness = async (req, res) => {
  try {
    const Business = await businessService.createBusiness(req.body);
    res.status(200).json(Business);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.getBusiness = async (req, res, next) => {
  try {
    const Business = await businessService.getBusiness();
    res.status(200).json(Business);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBusinessById = async (req, res, next) => {
  try {
    const BusinessId = req.params.id;
    const Business = await businessService.getBusinessById(BusinessId);
    res.status(200).json(Business);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
