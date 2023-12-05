const ProjectSample = require("../models/ProjectSample.model");

//Add a new project sample to the database
const addProjectSample = async (req, res) => {
  try {
    const { projectName, projectType, projectDiscription, thumbnail, samples } = req.body;

    const newProjectSample = new ProjectSample({
      projectName,
      projectType,
      projectDiscription,
      thumbnail,
      samples
    });

    await newProjectSample.save();

    res.send({ message: "Project Sample added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//Get All project samples from the database
const getAllProjectSamples = async (req, res) => {
  const abc = await ProjectSample.find()
    .then((projectSample) => {
      res.json(projectSample);
    })
    .catch((e) => {
      console.log(e);
    });
};

//Get a project sample from the database
const getProjectSample = async (req, res) => {
  try {
    const projectSampleObject = await ProjectSample.findById(req.params.id);

    if (!projectSampleObject) {
      return res.status(404).json({ error: "Project Sample not found" });
    }

    const { _id, projectName, projectType, projectDiscription,  thumbnail, samples } = projectSampleObject;

    res.status(200).json({
      _id,
      projectName,
      projectType,
      projectDiscription,
      thumbnail,
      samples
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//Update Project Sample
const updateProjectSample = async (req, res) => {
  try {
    const { projectName, projectType, projectDiscription, thumbnail, samples } = req.body;

    const projectSampleObject = await ProjectSample.findById(req.params.id);

    if (!projectSampleObject) {
      return res.status(404).json({ error: "Project Sample not found" });
    }

    await ProjectSample.findByIdAndUpdate(req.params.id, {
      projectName,
      projectType,
      projectDiscription,
      thumbnail,
      samples
    });

    res.status(200).json({ message: "Project Sample updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//Delete Project Sample
const deleteProjectSample = async (req, res) => {
  try {
    const projectSampleObject = await ProjectSample.findById(req.params.id);

    if (!projectSampleObject) {
      return res.status(404).json({ error: "Project Sample not found" });
    }

    await ProjectSample.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Project Sample deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addProjectSample,
  getAllProjectSamples,
  getProjectSample,
  updateProjectSample,
  deleteProjectSample,
};