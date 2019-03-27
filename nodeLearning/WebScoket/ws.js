var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:3000});

wss.on("connection", function(ws){
	//making listner for the ws it listen every input from the browser.
	ws.on("message", function(message){
		if(message === "exit"){
			ws.close();  //this leaves the socketserver running but close the client connection
		}else{
			wss.clients.forEach(function(client){
				client.send(message);
			});
		}
	});

	ws.send("Welcome to cyber chat");
});