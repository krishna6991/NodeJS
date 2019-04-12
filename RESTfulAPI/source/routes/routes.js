const todoList = require('../controllers/controller');
const routes = (app) => {
	app.route('/contact')
	.get((req,res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request Type: ${req.method}`)
		next();
	}, todoList.getContacts)
	.post((req,res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request Type: ${req.method}`)
		var body = JSON.stringify(req.body);
		console.log(`Request ${body}`);
		next();
	}, todoList.addNewContact);

	app.route('/contact/:contactId')
	.put((rq,res) =>
		res.send('PUT request successful!!'))
	.delete((rq,res) =>
		res.send('DELETE request successful!!'));
}

module.exports = routes;