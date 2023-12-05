const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newNewsLetterEmail = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const NewsLetterEmails = mongoose.model("NewsLetterEmails", newNewsLetterEmail);

module.exports = NewsLetterEmails;
