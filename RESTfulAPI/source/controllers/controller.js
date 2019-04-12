'use strict';
const mongoose = require('mongoose');
const ContactSchema = require('../models/model');

const Contact = mongoose.model('Contact', ContactSchema);

exports.addNewContact = (req,res) => {
	let newContact = new Contact(req.body);
	newContact.save((err,contact) => {
		if(err){
			res.send(err);
		}
		res.json(contact);
	});
};

exports.getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};