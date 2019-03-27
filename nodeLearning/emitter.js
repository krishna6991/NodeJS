var events = require("events");

var emitter = new events.EventEmitter();
emitter.on('customeEvent', function(message, status){
  console.log(`${status}: ${message}`);
});

emitter.emit('customeEvent',"hello World", 200);
