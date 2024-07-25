const Contact = require("../models/contactModels");

// insert contact queries
exports.insertContact = async (req, res) => {
  const { name, email, queries } = req.body;
  try {
    const newContact = new Contact({ name, email, queries });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
