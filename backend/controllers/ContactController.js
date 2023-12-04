const Contact = require("../models/Contact.model");

//ADD NEW CONTACT
const addContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        let contact = await Contact.findOne({ email });

        if (contact) {
            contact.messages.push(message);
        } else {
            contact = new Contact({ name, email, messages: [message] });
        }

        await contact.save();
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

//GET ALL CONTACTS
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

//GET A CONTACT
const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

//UPDATE A CONTACT
const updateContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = await Contact.findById(req.params.id);

        if (contact) {
            contact.name = name;
            contact.email = email;
            contact.messages.push(message);
        }

        await contact.save();
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

//DELETE A CONTACT
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    addContact,
    getAllContacts,
    getContact,
    updateContact,
    deleteContact
};
