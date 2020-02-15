// Find the greatest common divisor of two positive integers.The integers can be large,
// so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the the greatest common divisor
// will always be an integer that is also greater or equal to 1.

// function mygcd(x, y) {
// 	var divisor = 0;
// 	x > y ? (divisor = y) : (divisor = x);

// 	if (x % divisor === 0 && y % divisor === 0) {
// 		console.log(divisor);
// 	} else {
// 		for (let i = divisor; i >= 1; i--) {
// 			let a = x % divisor;

// 			if (a === 0) {
// 				let b = y % divisor;
// 				if (b === 0) {
// 					console.log(divisor);
// 				}
// 			} else {
// 				divisor -= 1;
// 			}
// 		}
// 	}
// }

// function mygcd(x, y) {
// 	let n = 0;

// 	if (x < y) {
// 		n = x;
// 	} else if (x > y) {
// 		n = y;
// 	} else {
// 		return x;
// 	}

// 	for (let i = n; n >= 1; n--) {
// 		if (x % n === 0 && y % n === 0) {
// 			return n;
// 		}
// 	}
// }

function mygcd(x, y) {
	while (y) {
		[x, y] = [y, x % y];
	}
	return x;
}

mygcd(112231313144324, 188854854);
