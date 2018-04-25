function longestStrings(strArr) {
  if (strArr.length < 1) {
    return false;
  }
  var longestStrArr = [];
  var longestStr = strArr[0].length;
  longestStrArr.push(strArr[0]);
  for (var i = 1; i < strArr.length; i++) {
    if (strArr[i].length >= longestStr) {
      if (strArr[i].length > longestStr) {
        longestStrArr.length = 0;
      }
      longestStrArr.push(strArr[i]);
      longestStr = strArr[i].length;
    }
  }
  return longestStrArr;
}
