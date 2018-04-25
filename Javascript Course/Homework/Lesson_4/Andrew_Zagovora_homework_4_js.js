function arrN(n) {

	var arrMin = n[0];
	var arrMax = n[0];

	i = 1;


	while (n.length > i){
		if (arrMin > n[i]){
			arrMin = n[i];
		} else {
			arrMin;
		}
		i++;
	}

	i = 1;

	while (n.length > i){
		if (arrMax < n[i]){
			arrMax = n[i];
		} else {
			arrMax;
		}
		i++;
	}
	
	var result = arrMax - arrMin + 1 - n.length;
	return result;
}