function isSimilarArrays( arr1 , arr2 ) {
	let stop = false;
	for(let i = 0; i < arr1.length; i++) {
		if ( arr1[i] != arr2[i] ) {
			if ( arr1.length-1 == i ) {
				return false;
			}
			stop = i;
			let replacer = arr2[i];
			arr2[i] = arr2[i+1];
			arr2[i+1] = replacer;
			break;
		}
	}

	if ( stop !== false ) {
		for(let i = stop; i < arr1.length; i++) {
      if ( arr1[i] != arr2[i] ) {
        return false;
      }
    }
	}	
  
	return true;
}

isSimilarArrays([1,2,3,4,5,6],[1,2,3,4,6,6]); // false
isSimilarArrays([1,2,3,4,5,6],[1,2,4,3,5,6]); // true
