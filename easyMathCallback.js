//var myArray = [4, 8, 2, 7, 5];

function processArray(arr, callback) {
	var newArr = [];
	for (i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i]));
	}
	return newArr;
}

