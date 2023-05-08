const express = require("express");
const router = express.Router();
const kycVerifyController = require("../../controllers/verify/kycVerifyController");

router.post("/verify", kycVerifyController.kycVerification);
router.get("/", kycVerifyController.getkycVerification);
router.get("/:id", kycVerifyController.getkycById);

module.exports = router;
