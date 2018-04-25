matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]];


function getCostWithoutBadFlats( matrix ) {	

	var badFlats = new Array( matrix[0].length-1 );
	var sum = 0;

	for ( let i = 0; i < matrix.length; i++ ) {
		for ( let j = 0; j < matrix[i].length; j++ ) {
			console.log( +matrix[i][j] != "number" );

			if ( isNaN(+matrix[i][j]) || matrix.length >= 5 || matrix.length <= 1 ||  matrix[i].length <= 1 || matrix[i].length >= 5 || matrix[i][j] < 0 || matrix[i][j] >= 10 ) {
				alert('You set wrong number: ' + n);
				return false;
			}

			if ( matrix[i][j] === 0 ) {
				badFlats[j] = true;
			}
			if ( badFlats[j] == true ) {
				matrix[i][j] = 'x';
			} else {
				sum += matrix[i][j];
			}
		}
	}

	return sum;

}

getCostWithoutBadFlats( matrix );
