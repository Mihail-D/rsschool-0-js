//multiple of 3: use the value 'Fizz' instead
//multiple of 5: use the value 'Buzz' instead
//multiple of 3 & 5: use the value 'FizzBuzz' instead

// function fizzbuzz(n) {
// 	for (let i = 0; i < n.length; i++) {
// 		if (n[i] % 3 === 0 && n[i] % 5 === 0) {
// 			n.splice(i, 1, "FizzBuzz");
// 		} else if (n[i] % 3 === 0) {
// 			n.splice(i, 1, "Fizz");
// 		} else if (n[i] % 5 === 0) {
// 			n.splice(i, 1, "Buzz");
// 		}
// 	}
// 	return n;
// }

var fizzi = fizzbuzz;
function fizzbuzz(n) {
	var out = [];
	for (var i = 1; i <= n; i++) {
		var res = "";
		if (i % 3 == 0) res += "Fizz";
		if (i % 5 == 0) res += "Buzz";
		out.push(res.length == 0 ? i : res);
	}
	return out;
}

console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
