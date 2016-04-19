var a = 1;
var b = 2;
var c = 3;
var d = a + b + c;
b = a;
b = 5;

var hour = 11;
var minute = 50;
var midnight = 24;
var timeToMidnight = (midnight*60*60) - (hour*60*60) - (minute*60);

console.log(timeToMidnight);

minute = 55;