function apartmentCost(matrix) {
  var len = matrix.length;
  var one = [];
  for (var i = 0; i < len; i++) {
    if (len > 5 || 1 > len || matrix[i].length > 5) {
      return false;
    }
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 10 || matrix[i][j] < 0) {
        return false;
      } else if (matrix[i][j] === 0 && matrix[i] !== matrix[len - 1]) {
        matrix[i + 1][j] = 0;
      }
      one.push(matrix[i][j]);
    }
  }
  function add(a, b) {
    return a + b;
  }
  if (one.length !== 0) {
    return one.reduce(add);
  } else {
    return false;
  }
}
var matrix = [[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]];
apartmentCost(matrix);