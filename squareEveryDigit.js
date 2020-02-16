function squareDigits(num) {
	let arr = ('' + num).split('');
	let newStr = '';
	for (let i of arr) {
		i *= i;
		newStr += i;
	}
	return +newStr; 
}

console.log(squareDigits(9119));  //811181
