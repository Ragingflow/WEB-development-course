function getPoligon(n)	 {
	var rezult = 1;

	for (var i = 1; i < n; i++) {
		rezult = rezult * 2 + 3; 
	}
	return rezult;
}