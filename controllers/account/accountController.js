const accountService = require("../../services/account/accountServices");

exports.createBaseAccount = async (req, res) => {
  try {
    console.log("esfojfdk");
    const Account = await accountService.createBaseAccount(req.body);
    res.status(200).json(Account);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.createBaseAccountTemp = async (req, res) => {
  try {
    const Account = await accountService.createBaseAccountTemp(req.body);
    res.status(200).json(Account);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.listAccount = async (req, res, next) => {
  try {
    const Account = await accountService.listAccount();
    res.status(200).json(Account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
