function getPolygonArea(n) {
  var curArea = n;
  var prevArea = n - 1;
  var result1 = 0;
  var result2 = 0;
  
  for(i=0; i < curArea; i++) {
    result1 += curArea;
  }
  for(j=0; j < prevArea; j++) {
    result2 += prevArea;
  }
  
  return result1 + result2;
}

getPolygonArea(5);