function sameLetter(a, b) {
  var counter = 0;
  for (var i = 0; a.length > i; i++) {
    for (var k = 0; b.length > k; k++) {
      if (a[i] == b[k]) {
        b = b.replace(b[k] , "");
        counter += 1;
        break;
      }
    }
  } return counter;
}
