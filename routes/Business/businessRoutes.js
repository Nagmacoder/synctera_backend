const express = require("express");
const router = express.Router();
const businessController = require("../../controllers/businessAcc/businessController");

router.post("/", businessController.createBusiness);
router.get("/", businessController.getBusiness);
router.get("/:id", businessController.getBusinessById);

module.exports = router;
