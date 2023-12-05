const router = require("express").Router();

const {
  addEmail,
  getAllEmails,
  getEmail,
  updateEmail,
  deleteEmail
} = require("../controllers/NewsLetterEmailsController");

//ADD NEW EMAIL
router.post("/addEmail", addEmail);

//GET ALL EMAILS
router.get("/getAllEmails", getAllEmails);

//GET A EMAIL
router.get("/getEmail/:id", getEmail);

//UPDATE A EMAIL
router.put("/updateEmail/:id", updateEmail);

//DELETE A EMAIL
router.delete("/deleteEmail/:id", deleteEmail);

module.exports = router;
