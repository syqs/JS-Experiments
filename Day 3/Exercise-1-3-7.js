var i = 1,
	j = 0,
	n = 5,
	output = "";

while (i <= n) {
	j = 1;
	output = "Welcome " + i;
	while (j < i){
		if (j === 1) {
			output += ", meet " + j;	
		} else if (j === i - 1) {
			output += " and " + j;	
		} else {
			output += ", " + j;	
		}
		j++;
	}
	console.log(output);
	i++;
}