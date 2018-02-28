// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

<<<<<<< HEAD
    function accum(input)
    {
        //your code is here
     var wholeStr="";
     var strArr=input.split("");
       	for(var i=0; i<strArr.length;i++)
       	{
        	var result="";
        	
        	for(var j=0;j<=i;j++)
        	{
        		if(j===0)
        		{
        			result+=strArr[i].toUpperCase()
        		}
        			else
        		{
        			result +=strArr[i].toLowerCase()
        		}
        	}
			if(i!==strArr.length-1)
				{
        			wholeStr +=result+"-";
        		}
			else
				{ 
				wholeStr +=result
				}
        }
        
		return wholeStr;
    }
=======
    function accum(input){
        //your code is here
    }
>>>>>>> f347da1f79e381ff1db6b5d93ff64fe7dadba6f5
