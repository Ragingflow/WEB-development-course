function poligonSquare(n) {
	var n_rounded = Math.round(n);
	if ( !n_rounded ) {
		alert('You set wrong number: ' + n);
		return false;
	}
	if ( n_rounded <= 0 ) {
		alert('Number must be more than zero: ' + n);
		return false;
	}
	
	var square = 0;
	while( n_rounded ) {
		square == 0 ? k = 1: k = 2;
		n_rounded = n_rounded - 1;
		square += ( 1 + ( n_rounded*2 ) ) * k;
    } 

	return square;
}
