const router = require("express").Router();

const {
  addProjectSample,
  getAllProjectSamples,
  getProjectSample,
  updateProjectSample,
  deleteProjectSample,
} = require("../controllers/ProjectSampleController");

//ADD NEW PROJECT SAMPLE
router.post("/addProjectSample", addProjectSample);

//GET ALL PROJECT SAMPLES
router.get("/getAllProjectSamples", getAllProjectSamples);

//GET A PROJECT SAMPLE
router.get("/getProjectSample/:id", getProjectSample);

//UPDATE A PROJECT SAMPLE
router.put("/updateProjectSample/:id", updateProjectSample);

//DELETE A PROJECT SAMPLE
router.delete("/deleteProjectSample/:id", deleteProjectSample);

module.exports = router;
