const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newRequest = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    requirements: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", newRequest);

module.exports = Request;
