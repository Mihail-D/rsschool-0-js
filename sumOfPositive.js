function positiveSum(arr) {
	let sum = 0;
	for (const i of arr) {
		if (i > 0) {
			sum += i;
		}
	}
	return sum; 
}

console.log(positiveSum([-1, 2, 3, 4, -5]));  //9
