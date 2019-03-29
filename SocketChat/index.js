const app = require("express")();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 3000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/kunalKamra', (req,res) => {
	res.sendFile(__dirname + '/public/kunalKamra.html');
});
//funny namespace 
const funny = io.of('/funny');


funny.on('connection', (socket) => {   //when someone is connect
	socket.on('join', (data) => {   //join is an api of socket.io
		socket.join(data.room);
		funny.in(data.room).emit('message', `New user joined ${data.room} room !`);
	});

	socket.on('message', (data) => {
		console.log(`message: ${data.msg}`);
		funny.in(data.room).emit('message', data.msg);
	});
	socket.on("disconnect", () => {
	console.log('user get disconnected');
	funny.emit('message', 'user disconnected');
});

});
