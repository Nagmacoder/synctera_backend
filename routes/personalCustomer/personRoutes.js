const express = require("express");
const router = express.Router();
const personController = require("../../controllers/personalCustomer/personController");

router.post("/create-person", personController.createPerson);
router.get("/persons/:id", personController.getPersonById);
router.get("/persons", personController.getPersons);

module.exports = router;
