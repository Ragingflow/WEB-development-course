function getAppartmentsSumPrice(matrix) {
  var sum = 0;
  for (var j = 0; j < matrix.length; j++) {
    for (var i = 0; i < matrix[j].length; i++) {
      if (j > 0) {
        if (matrix[j - 1][i] === 0) {
          matrix[j][i] = 0;
        }
      }
      sum += matrix[j][i];
    }
  }
  return sum;
}
