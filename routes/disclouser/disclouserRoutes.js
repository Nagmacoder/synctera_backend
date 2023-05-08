const express = require("express");
const router = express.Router();
const disclouserController = require("../../controllers/disclouser/disclouserController");

router.post("/", disclouserController.recordDisclosureAcceptance);

router.get("/", disclouserController.getDisclosures);
router.get("/:id", disclouserController.getDisclosureById);

module.exports = router;
