var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	if(req.method==="GET"){
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
	}
	else if(req.method==="POST"){
		var body = "";
		req.on("data", function(chunk){  //if any data comes on this stream ,we will recive that chunk of data and pass to this function.
			body+=chunk;
		});
		req.on("end", function(){
			res.writeHead(200, {"Content-Type":"text/html"});
			res.end(`
				<!DOCTYPE html>
				<html>
				<head>
				<title>Form Results</title>
				</head>
				<body>
					<h1>Your form result</h1>
					<h3>${body}</h3>
				</body>
				</html>
				`);
		});
	}
}).listen(3000);

console.log("server listening on port 3000");