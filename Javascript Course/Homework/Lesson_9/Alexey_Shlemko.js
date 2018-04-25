function getRepetitiveLettersCount(string1, string2) {
  var repetitiveLettersCount = 0;
  var arr1 = string1.split('');
  var arr2 = string2.split('');
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        repetitiveLettersCount++;
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return repetitiveLettersCount;
}
