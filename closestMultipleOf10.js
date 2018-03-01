 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	
 	for(var i =num ; i>=0 ; i--){
 		if(i%10===0){
 			return i;
 		}
 	}
 }