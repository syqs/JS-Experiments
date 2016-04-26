var returned_values;

function log_and_return() {
//	console.log(arguments);
	//var returned_values = arguments;
	returned_values = arguments;
	return returned_values;

//	returned_values = arguments;
}



/*log_and_return(3);
log_and_return(3 + 4);
log_and_return(3, 4);
log_and_return("text", 1);
log_and_return("text", true, 2+5, undefined);*/

console.log(log_and_return("outside text", 1));

console.log(log_and_return(returned_values));

console.log(log_and_return(returned_values));