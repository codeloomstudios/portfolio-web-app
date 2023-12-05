const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newContact = new Schema(
  {
    name : { type: String, required: true },
    email: { type: String, required: true },
    messages: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", newContact);

module.exports = Contact;
