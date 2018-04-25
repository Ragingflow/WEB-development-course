function polygon(n) {
  var num = 1;
  if (n == 1) {
  	return n
  } else {
  for (var i = 0; i < n; i++) {
    num += i*4;
  } return num;
 }
}
