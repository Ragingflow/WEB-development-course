function countMissingNumbers( numArr ) {
	
	numArr.sort(function(a, b) {
	  	return a - b;
	});

	let quantity = 0;

	for (let i = 0; i < numArr.length; i++) {
	  	let dif = numArr[i+1] - numArr[i];
	  	if ( dif > 1) {
	  		quantity += dif-1;
		}
	}

	return quantity;

}

countMissingNumbers([2,7,5,1,4,16]); // 10
