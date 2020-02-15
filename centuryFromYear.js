// Первый век с 1 до 100 года
// Второй -	с года 101 с и до 200-го, и т.д.
// Given a year, return the century it is in.
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function century(year) {
	if (year >= 1 && year <= 100) {
		return 1;
	} else if (year >= 101 && year <= 1000) {
		return Math.trunc(year / 100 + 1);
	} else if (year % 100 === 0) {
		return year / 100;
	} else if (year % 100 !== 0) {
		return Math.trunc(year / 100 + 1);
	}
}

century(102);
