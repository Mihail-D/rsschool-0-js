// Define a function that takes an integer argument and returns logical value true or false
// depending on if the integer is a prime.
// A prime number(or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.

// function isPrime(num) {
// 	let count = 0;

// 	if (num <= 1) {
// 		console.log("false");
// 	} else {
// 		for (let i = num; i > 0; i--) {
// 			num % i;
// 			if (num % i === 0) {
// 				count++;
// 			}
// 			if (count > 2) {
// 				break;
// 			}
// 		}

// 		if (count === 2) {
// 			console.log("true");
// 		} else {
// 			console.log("false");
// 		}
// 	}
// }

function isPrime(num) {
	if (num * 0 !== 0) return false;
	if (num <= 3) return num > 1;
	if (num % 2 === 0 || num % 3 === 0) return false;

	for (var i = 5; i * i <= num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) {
			return false;
		}
	}

	return true;
}

isPrime(75);
