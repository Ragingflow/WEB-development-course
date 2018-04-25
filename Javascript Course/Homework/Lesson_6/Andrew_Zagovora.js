function luckyTicket(n) {

	n = String(n);

	if (n.length % 2 != 0 ) {
		return false;
	}

	var sumLeft = 0;
	for (i = 0; n.length/2 > i ; i++) {
		var sumLeft = sumLeft + +n[i];
	}


	var sumRight = 0;
	for (i ; n.length > i ; i++) {
		var sumRight = sumRight + +n[i];
	}

	if (sumLeft == sumRight) {
		return true;
	} else {
		return false;
	}

}