const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({  //use can use export default here
	firstName: {
		type: String,
		required: 'Enter a first name'
	},
	lastName: {
		type: String,
		required: 'Enter a last name'
	},
	email: {
		type: String,
	},
	company: {
		type: String,
	},
	phone: {
		type: Number,
	},
	created_date:{    //it will create itself
		type: Date,
		default: Date.now
	}
});

//var Contact = mongoose.model('Contact', ContactSchema)
module.export = ContactSchema;