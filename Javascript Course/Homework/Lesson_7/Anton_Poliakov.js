matrix = [[1, 1, 1, 0],
          [0, 5, 0, 1],
          [2, 1, 3, 10]];

function getHousePrice(matrix) {
  if (matrix >= 5) {
    return false;
  }

  var result = 0;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i].length >= 5) {
      return false;
    }

    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 10) {
        return false;
      }

      if (i > 0 && matrix[i - 1][j] === 0) {
        matrix[i][j] = 0;
      } else {
        result += matrix[i][j];
      }
    }
  }
  return result;
}

getHousePrice(matrix);
