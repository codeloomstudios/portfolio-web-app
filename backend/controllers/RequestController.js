const Request = require("../models/Request.model");

//ADD NEW REQUEST
const addRequest = async (req, res) => {
  try {
    const { name, email, requirements } = req.body;
    let request = await Request.findOne({ email });

    if (request) {
        request.requirements.push(requirements);
        } else {
            request = new Request({ name, email, requirements: [requirements] });
        }

    await request.save();

    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//GET ALL REQUESTS
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//GET A REQUEST
const getRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//UPDATE A REQUEST
const updateRequest = async (req, res) => {
  try {
    const { name, email, requirements } = req.body;
    const request = await Request.findById(req.params.id);

    if (request) {
      request.name = name;
      request.email = email;
      request.requirements.push(requirements);
    }

    await request.save();
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//DELETE A REQUEST
const deleteRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  addRequest,
  getAllRequests,
  getRequest,
  updateRequest,
  deleteRequest,
};