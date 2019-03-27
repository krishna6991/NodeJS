var express = require("express");

var app = express();


app.use(function(req,res,next){
	console.log(`${req.method} request for '${req.url}'`);
	next();  // in order to tell our code to move on to the next piece of middleware in the pipeline, we need to invoke this next function.
});

app.use(express.static("./public"));

app.listen(3000);
console.log("express app running on port 3000");

module.exports = app;