// Для завершения этого Kata вам нужно сделать функцию multiplyAll / multiply_all,
// 	которая принимает массив целых чисел в качестве аргумента.
// Эта функция должна возвращать другую функцию, которая принимает одно целое число
// в качестве аргумента и возвращает новый массив.

// Возвращаемый массив должен состоять из каждого элемента из первого массива,
// 	умноженного на целое число.

// function multiplyAll(x, y) {
// 	let newArr = [];

// 	function foo() {
// 	let arr = x;
// 	let mult = y;
// 		for (const i of arr) {
// 			newArr.push(i * mult);
// 		}

// 	}
// 	return newArr;
// }

// console.log(multiplyAll([1, 2, 3, 4, 5, 6], 3));

function multiplyAll(arr) {
	return function(n) {
		var newArr = [];
		for (var i = 0; i < arr.length; ++i) newArr.push(arr[i] * n);
		return newArr;
	};
}

console.log(multiplyAll([1, 2, 3, 4, 5, 6])); 