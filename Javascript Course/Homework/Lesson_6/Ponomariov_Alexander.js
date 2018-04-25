function isHappyTicket( number ) {
	let numArr = [...(number+'')];
	let leftSide = rightSide = 0; 
	if ( numArr.length > 6 || numArr.length % 2 != 0 ) return 'wrong numder';

	for (let i = 0; i < numArr.length; i++) {
		let currentValue = parseInt(numArr[i]); 
		if (!Number.isInteger(currentValue)) return 'wrong numder';
		i < numArr.length / 2 ? leftSide += currentValue : rightSide += currentValue ;
	}
	if (leftSide == rightSide) return true;

    return false;
}

isHappyTicket( '239617' ) // True
isHappyTicket( '239017' ) // False
isHappyTicket( '2390a7' ) // 'wrong numder'
