// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//your code is here
		function characPosit(character){
		return character.charCodeAt(0) - 96;
}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
	//your code is here
	var result ="";
	for (var i=0;i<s;i++){
		result= result+n ;
	}	
	return result;

	}
