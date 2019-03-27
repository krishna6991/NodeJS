var express = require("express");

var app = express();

var skierTerms = [
	{
		term: "Rip",
		defined: "To move at a high rate of speed."
	},
	{
		term: "Huck",
		defined: "To throw your body ofoo of something. usually a natural feature like a cliff."
	},
	{
		term: "Chowder",
		defined: "Powder after it has been sufficientlt skied."
	}
];


app.use(function(req,res,next){
	console.log(`${req.method} request for '${req.url}'`);
	next();  // in order to tell our code to move on to the next piece of middleware in the pipeline, we need to invoke this next function.
});

app.use(express.static("./public"));

app.get("/dictionary-api", function(req,res){
	
});

app.listen(3000);
console.log("express app running on port 3000");

module.exports = app;