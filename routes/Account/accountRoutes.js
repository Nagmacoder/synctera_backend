const express = require("express");
const router = express.Router();
const accountController = require("../../controllers/account/accountController");

router.post("/", accountController.createBaseAccount);
router.get("/", accountController.listAccount);
router.post("/templates", accountController.createBaseAccountTemp);

module.exports = router;
    