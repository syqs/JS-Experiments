function findFibo(num) {
	var count = 2,
		start0 = 0,
		start1 = 1,
		fibSequence = 0,
		num = num || 0;
	if (num === 0)
		return "The number " + num + " is located in position 0.";
	if (num === 1)
		return "The number " + num + " is located in position 1 and 2.";

	while (num !== fibSequence) {
		fibSequence = start0 + start1;
		start0 = start1;
		start1 = fibSequence;
		count++;
		if (fibSequence > num) 
			return "The number " + num + " not found in the Fibonacci sequence!";
	}
	return "The number " + num + " is located in position " + count + ".";
}
console.log(findFibo(8));