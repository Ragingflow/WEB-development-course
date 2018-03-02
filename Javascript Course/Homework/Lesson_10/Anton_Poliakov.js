function isEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  var missing = [];
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      missing.push([array1[i], array2[i]]);
    }
  }

  if (missing.length === 2) {
    for (var j = 1; j < missing.length; j++) {
      if (missing[j - 1].reverse()[j - 1] === missing[j][j - 1] &&
          missing[j - 1][j] === missing[j][j]) {
          return true;
      }
    }
  }

  if (missing.length === 0) return true;

  return false;

}

isEqual([1, 2, 3, 4], [1, 4, 3, 2]);
