var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
	this.name =name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("krishna");

ben.on('speak', function(said){
	console.log(`$${this.name}: ${said}`);
});

ben.emit('speak', "this is what i say usually."); 