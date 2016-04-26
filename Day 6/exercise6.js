function factorial_of_n(num) {
	var output = 1;
	while (num > 0) {
		output *= num;
		num--; 
	}
	return output;
}

function count_by_n(count_by, count_up_to) {
	var output = 0;
	while (output < count_up_to) {
		output += count_by;
		console.log(output);
	}
}
count_by_n(2, 10);
console.log(factorial_of_n(5));