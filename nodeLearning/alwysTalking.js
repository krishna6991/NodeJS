var saying = [
	"you may delay, but time will not,",
	"tell me and I forget, Teach me and i remermber, Involve me and I learn",
	"It takes manu good deeds to build a good reputation, and only one bad one to lose it.",
	"By falling to prepare, you are preparing to fail",
	"an investment in knowledge pays the best interest",
	"well done is better than well said"
];

var interval = setInterval(function(){
	var i = Math.floor(Math.random() * saying.length);
	process.stdout.write(`${saying[i]} \n`);

},1000);

process.stdin.on('data', function(data){
	console.log(`STDIN Data Recieved -> ${data.toString()}`);
	clearInterval(interval);
	process.exit();
});