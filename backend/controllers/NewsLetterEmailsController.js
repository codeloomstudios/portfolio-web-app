const NewsLetterEmails = require("../models/NewsLetterEmails.model");

//Add a new email to the database
const addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email already exists in the database
    const existingEmail = await NewsLetterEmails.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const newEmail = new NewsLetterEmails({
      email,
    });

    await newEmail.save();

    res.send({ message: "Email added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//Get All emails from the database
const getAllEmails = async (req, res) => {
  const abc = await NewsLetterEmails.find()
    .then((userMail) => {
      res.json(userMail);
    })
    .catch((e) => {
      console.log(e);
    });
};

//Get a email from the database
const getEmail = async (req, res) => {
  try {
    const userEmailObject = await NewsLetterEmails.findById(req.params.id);

    if (!userEmailObject) {
      return res.status(404).json({ error: "Email not found" });
    }

    const { _id, email } = userEmailObject;

    res.status(200).json({
      _id,
      email,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//Update Email
const updateEmail = async (req, res) => {
  try {
    const { email } = req.body;

    let updateData = {
      email,
    };

    // Updating
    const update = await NewsLetterEmails.findByIdAndUpdate(
      req.params.id,
      updateData
    );

    if (update) {
      res.status(200).json({
        data: "Email updated successfully",
        status: true,
      });
    } else {
      res.status(401).json({
        errorMessage: "Failed to edit the Email!",
        status: false,
      });
    }
  } catch (error) {
    res.status(401).json({
      errorMessage: "Something went wrong!\n" + error,
      status: false,
    });
  }
};

//Delete Email
const deleteEmail = async (req, res) => {
  try {
    const deleted = await NewsLetterEmails.findByIdAndDelete(req.params.id);

    if (deleted) {
      res.status(200).json({
        data: "Email Deleted",
        status: true,
      });
    } else {
      res.status(401).json({
        errrorMessage: "Failed to delete the Email!",
        status: false,
      });
    }
  } catch (error) {
    res.status(401).json({
      errorMessage: "Something went wrong!\n" + error,
      status: false,
    });
  }
};

//Export
module.exports = {
  addEmail,
  getAllEmails,
  getEmail,
  updateEmail,
  deleteEmail,
};
