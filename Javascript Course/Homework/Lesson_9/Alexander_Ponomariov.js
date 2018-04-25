str1 = "aabcc";
str2 = "adcaa";

function getRepeatedSymbols ( string1 , string2 ) {

	var repeats = 0;
	
	for ( let i = 0; i < string1.length; i++ ) {

		if ( string2.indexOf(string1[i])+1 ) {
			string2 = string2.replace( string1[i] , " " );
			repeats++;
		}		

	}

	return repeats;

} 

getRepeatedSymbols( str1 , str2 );
