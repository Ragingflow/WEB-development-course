function getPolygon(n) {
  if (n <= 0 || isNaN(n)) {
    return 0;
  }
  
  var polygon = 1;
  for (i = 2; i <= n; i++) {
    polygon += (i-1)*4;
  }
  
  return polygon;
}