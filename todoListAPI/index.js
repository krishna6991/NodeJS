var express = require("express"),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./models/model'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


var routes = require('./routes/route');
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});  //redirect and responds whenever a wrong route is entered on the site

app.listen(port)

console.log('todo list RESTful API server started on: ' + port);