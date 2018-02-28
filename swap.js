	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
	
	var result=""
		for(var i=0;i<input.length;i++){
			if(input[i]===input[i].toLowerCase()){
				result+=input[i].toUpperCase()
			}
			else{
				result+=input[i].toLowerCase()
			}
		}
		return result;
	}