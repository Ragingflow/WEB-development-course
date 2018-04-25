function compare(a, b) { return a - b; }

function getMissingDigits(array) {
  var sortedArray = array.sort(compare);
  var result = 0;

  for (var i in sortedArray) {
    var num = sortedArray[i] - sortedArray[i-1];
    if (i > 0 && sortedArray[i] !== 1) {
      result += num - 1;
    }
  }

  return result;
}

getMissingDigits([6, 3]);
