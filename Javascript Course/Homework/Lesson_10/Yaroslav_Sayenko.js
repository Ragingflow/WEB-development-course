function similar(a, b) {
  if (a.length != b.length) {
    return false
  }
  var str1 = a.join('');
  var str2 = b.join('');
  if (str1 == str2) {
    return true
  }
  var sort1 = a.slice(0).sort();
  var sort2 = b.slice(0).sort();
  var str3 = sort1.join('');
  var str4 = sort2.join('');
  if (str3 != str4) {
    return false;
  }
  var arr1 = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      arr1.push(b[i]);
    }
  }
  if (arr1.length > 2) {
    return false
  }
  return true
}