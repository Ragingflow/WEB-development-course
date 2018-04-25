function getCentury(century) {
	var getYear = prompt('Please enter year','');
	

	if(getYear == null || '') {
		document.getElementById('century').innerHTML = 'Don\'t shrink from answering :)';
	} 
	else {
		var curYear = parseInt(getYear);
		if(isNaN(curYear)) {
			document.getElementById('century').innerHTML = 'Please enter a number';
		} else {
			curYear = Math.ceil(curYear / 100);
			document.getElementById('century').innerHTML = curYear +' century';
		}
	}	
}
getCentury();