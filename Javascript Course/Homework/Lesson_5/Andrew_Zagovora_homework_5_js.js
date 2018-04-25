function arrCheck(n) {

	var newArr = [];
	var check = false;

	for (var i = 0; n.length > i ; i++) {
		newArr =  n.slice();
		delete newArr[i];
		newArr = newArr.filter(function(number){
			return number;
		})

		if(sort(newArr)){
			check = true;
			break;
		}
	} return check;
}

		

function sort(x){
	var arrSort = true;
	for (var k = 0; x.length > k; k++) {
		if (x[k + 1] <= x[k]) {
			arrSort = false;
		}
	} return arrSort;
} 