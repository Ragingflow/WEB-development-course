function isGrowAfterDel( numArr ) {

	let quantity = 0;
	
	for (let i = 0; i < numArr.length; i++) {
	  	if (numArr[i] >= numArr[i+1]) {
	  		quantity++
	  	} 
	  	if (numArr[i] >= numArr[i+2]) {
	  		quantity++
	  	} 
	  	
		if ( quantity>= 2 ) return false
	}

	return true;

}
