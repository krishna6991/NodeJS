var waitTime  = 5000;
var currentTime = 0;
var waitInterval = 50;
var percentWaited = 0;

function writeWaitingPercent(p){
  process.stdout.clearLine();  //it will clear the terminal
  process.stdout.cursorTo(0);  //return the curson to initial index.
  process.stdout.write(`waiting ... ${p}%`); //print the total completed percentage.
}

var interval = setInterval(function(){   //we are storing this interval value so we can stop this after completed 3s.
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function(){
  clearInterval(interval);   //it will clear the setInterval.
  writeWaitingPercent(100);
  console.log("\n\ndone");
},waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
