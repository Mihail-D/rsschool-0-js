//function that removes the first and last characters of a string. You're given one parameter, the original string

function removeChar(str){
	return str.substr(1, str.length - 1); 
	//let a = str.substr(1, str.length - 1);
	//console.log(a); 
};

removeChar('qwerty12e');