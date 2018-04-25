function getter(arr) {
	var max = Math.max.apply(null,arr),
	min = Math.min.apply(null,arr),
	fullArr = [],
	rezult = 0;

	for(var i = min; i <= max; i++) {
		fullArr.push(i)
	}
	rezult = fullArr.length - arr.length

	return rezult
}

getter(mass)
