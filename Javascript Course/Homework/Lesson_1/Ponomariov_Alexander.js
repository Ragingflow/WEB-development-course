function getAgeFromYear (year) { 
	var year_rounded = Math.round(year);
	if ( !year_rounded || year_rounded < 0 || year_rounded > 2017 ) {
		alert('You set wrong year: ' + year);
		return false;
	} else {
		return Math.ceil(year_rounded/100);
	}
}
