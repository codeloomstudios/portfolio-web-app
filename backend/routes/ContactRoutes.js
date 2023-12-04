const router = require("express").Router();

const {
    addContact,
    getAllContacts,
    getContact,
    updateContact,
    deleteContact
    } = require("../controllers/ContactController");

//ADD NEW CONTACT
router.post("/addContact", addContact);

//GET ALL CONTACTS
router.get("/getAllContacts", getAllContacts);

//GET A CONTACT
router.get("/getContact/:id", getContact);

//UPDATE A CONTACT
router.put("/updateContact/:id", updateContact);

//DELETE A CONTACT
router.delete("/deleteContact/:id", deleteContact);

module.exports = router;