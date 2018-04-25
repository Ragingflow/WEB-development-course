function sameArr(a, b) {

	if (a.length != b.length) {
		return false;
	}

	var aTest = [];
	var bTest = [];

	for (var i = 0; i < a.length; i++) {
		if (a[i] - b[i] != 0) {
			aTest.push(a[i]);
			bTest.push(b[i]);
		}
	}

	if (aTest.length == 0 || bTest.length == 0) {
		return true;
	} else if (aTest.length != 2 && bTest.length != 2) {
		return false;
	}

	aTest.sort();
	bTest.sort();

	var check = 0

	for (i = 0; i < aTest.length; i++) {
		if (aTest[i] - bTest[i] != 0) {
			check += 1;
		}
	}

	if (check == 0) {
		return true;
	} else {
		return false;
	}
}