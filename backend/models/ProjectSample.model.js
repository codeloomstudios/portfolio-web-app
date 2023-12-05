const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newProjectSample = new Schema(
  {
    projectName: { type: String, required: true },
    projectType: { type: String, required: true },
    projectDiscription: { type: String, required: true },
    thumbnail: { type: String, required: true },
    samples: [
        {
            type: { type: String, required: false },
            description: { type: String, required: false },
            images: { type: Array, required: false }
        },
    ]
  },
  {
    timestamps: true,
  }
);

const ProjectSample = mongoose.model("ProjectSample", newProjectSample);

module.exports = ProjectSample;
