// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	let arr = s.split(" ").sort(function(a, b) {return a.length - b.length;});
	return arr[0].length; 
}

console.log(findShort("turns out random test cases are easier than writing out basic ones")); 