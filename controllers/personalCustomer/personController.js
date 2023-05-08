const personService = require("../../services/personServices/personService");

exports.createPerson = async (req, res) => {
  try {
    const person = await personService.createPerson(req.body);
    res.status(200).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getPersons = async (req, res, next) => {
  try {
    const Persons = await personService.getPersons();
    res.status(200).json(Persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPersonById = async (req, res, next) => {
  try {
    const personId = req.params.id;
    const person = await personService.getPersonById(personId);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
