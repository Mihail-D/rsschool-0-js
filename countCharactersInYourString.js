function count(string) {
	let newArr = string.split("").sort();

	for (let i = 0; i < newArr.length; i++) {
		var count = {};
		newArr.forEach(number => (count[number] = (count[number] || 0) + 1));
	}
	return (newArr.length === 0) ? {} : count;
}
console.log(count(""));
