const routes = (app) => {
	app.route('/contact')
	.get((req,res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request Type: ${req.method}`)
		next();
	}, (req, res, next) => {
		res.send('GET request successful!!!');
	})
	.post((rq,res) => {
		res.send('POST request successful!!');
	})

	app.route('/contact/:contactId')
	.put((rq,res) =>
		res.send('PUT request successful!!'))
	.delete((rq,res) =>
		res.send('DELETE request successful!!'));
}

module.exports = routes;