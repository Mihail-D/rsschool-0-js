// function distinct(a) {
// 	let newArr = a.sort();

// 	for (let i = 0; i < newArr.length - 1; i++) {
// 		if (newArr[i] === newArr[i + 1]) {
// 			newArr.splice(i, 1);
// 		}
// 	}

// 	return newArr;
// }

function distinct(a) {
	for (var i = 0; i < a.length; i++)
		for (var j = 0; j < a.length; j++)
			if (a[i] == a[j] && i != j) {
				a.splice(j, 1);
				i--;
				j--;
			}
	return a;
}

console.log(
	distinct([
		4216679,
		4216679,
		2803674,
		377740,
		26647,
		308960,
		1858198,
		1422655,
		149734,
		2693041,
		718635,
		1150458,
		2561368,
		622110,
		3414931,
		523725,
		1925884,
		1573801,
		3527770,
		736597,
		3331388,
		183336,
		4542231,
		956776,
		1330126,
		1423084,
		4054060,
		2530698,
		1037415,
		4894752,
		4154778,
		4964922,
		1264993,
		4336664,
		4285013,
		4718754,
		1433104,
		3521483,
		2557634,
		3905831,
		4514017,
		1485686,
		3858991,
		1232547,
		3760647,
		3754856,
		3026364,
		1798630,
	])
);