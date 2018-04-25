function isArraysSimilar(array1, array2) {
  if (array1.length === array2.length) {
    var differences = [];
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) {
        differences.push([array1[i], array2[i]]);
      }
    }
    if (differences.length === 0) {
      return true;
    } else if (differences.length === 2) {
      if (differences[0][1] === differences[1][0] && differences[1][1] === differences[0][0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
