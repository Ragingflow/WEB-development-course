function getPrice (matrix) {
  var sum = 0;
  var a = [];  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (a.indexOf(j) >= 0) continue;
      if (matrix[i][j] === 0) {
        a.push(j);
      } 
      else {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}