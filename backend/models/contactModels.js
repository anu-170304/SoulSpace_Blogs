const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    queries: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contacts", contactSchema);
module.exports = Contact;
