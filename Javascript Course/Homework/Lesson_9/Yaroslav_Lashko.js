function commonSymbols(a, b) {
  var re = /[^a-z]+/;
  if (a.search(re) != -1 || b.search(re) != -1) {
    return false;
  }
  var str1 = a.split('').sort();
  var str2 = b.split('').sort();
  var ln = str1 <= str2 ? str1 : str2;
  var result = 0;
  for (var i = 0, j = 0; j < a.length; i++) {
    if (str1.indexOf(str2[i], j) !== -1) {
      j = str1.indexOf(str2[i], j) + 1;
      result++;
    } else {
      j++;
    }
  }
  return result;
}
