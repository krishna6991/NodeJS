const routes = require('./source/routes/routes.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
	useMongoClient: true  //if we dont use this option it will give error for some recent updates
});
const app = express();
const PORT = 3000;
// bodyParser setup 
app.use(bodyParser.urlencoded({extended: true })); //
app.use(bodyParser.json());
routes(app);
app.get('/', (req,res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`your server is running on port ${PORT}`);
});


