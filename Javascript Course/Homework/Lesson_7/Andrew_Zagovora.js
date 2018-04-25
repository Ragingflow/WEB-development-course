function totalFlatPrice(n) {

	if ( n.length < 1 || n.length > 5) {
		return false;
	}

  	var price = 0;

 	for (var i = 0; i < n.length; i++) {

  		if ( n[i].length < 1 || n[i].length > 5) {
			return false;
		}

   			for (var k = 0; k < n[i].length; k++) {
   			 	if ( n[i][k] < 0 || n[i][k] > 10) {
			return false;
			}

    		if (i > 0) {
    			if (n[i - 1][k] == 0) {
          			n[i][k] = 0;
       		 	}
      		} price += n[i][k];
      	}
  	} return price;
}