function checkSort(array) {
  var extraNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      extraNumbers.push(i);
      continue;
    }
  }

  var duplicates = array.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  });
  var wrongNumbers = extraNumbers.concat(duplicates);

  if (wrongNumbers.length < 2) {
    return true;
  } else {
    return false;
  }
}
checkSort([1, 3, 2, 1]);
checkSort([1, 2, 1, 2]);
checkSort([1, 1, 1, 2, 3]);