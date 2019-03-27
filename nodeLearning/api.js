var http = require("http");
var data = require("./json/inventory");

http.createServer(function(req,res){

	if(req.url ==="/"){
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(data));
	}

	else if(req.url ==="/instock"){
		listInStock(res);
	}
	else if(req.url ==="/onboard"){
		listOnBackOrder(res);
	}else{
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops ...Data Not Found");
	}

	



}).listen(3000);

console.log("server listening on port 3000");

function listInStock(res){
	var inStock = data.filter(function(item){  //this callback function only return true or false
		return item.avail === "In Stock";		//if it is true is add the data inStock ow do nothing.
	});
	res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
	var onOrder = data.filter(function(item){
		return item.avail === "On back Order";
	});
	res.end(JSON.stringify(onOrder));
}