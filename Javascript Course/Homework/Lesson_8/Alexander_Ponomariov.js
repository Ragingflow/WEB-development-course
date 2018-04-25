strigsArr = ["aba", "aa", "ad", "vcd", "aba"];

function getLongestStringsArr ( strigsArr ) {

	var longestStrigsArr = [];
	var maxLength = 0;

	for ( let i = 0; i < strigsArr.length; i++ ) {
		if ( strigsArr[i].length > maxLength ) {
			longestStrigsArr = [strigsArr[i]];
			maxLength = strigsArr[i].length;
		} else if ( strigsArr[i].length == maxLength ) {
			longestStrigsArr.push(strigsArr[i]);
		} 
	}

	return longestStrigsArr;

}

getLongestStringsArr ( strigsArr );
