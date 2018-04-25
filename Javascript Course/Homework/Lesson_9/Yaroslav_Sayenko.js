function commonLetters (string1, string2) {
  var result = '';
  var exp = [];
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (exp.indexOf(j) != -1) continue;
      if (string1[i] == string2[j]) {
        result += string1[i];
        exp.push(j);
        break;
      }
    }
  }
  return result.length;
}