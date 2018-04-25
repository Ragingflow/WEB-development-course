function isSimilarArrays(a, b) {
  if (a.length != b.length) return false;
  var revPos = [],
    similar = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i] && b.indexOf(a[i]) == -1) {
      return false;
    } else if (a[i] != b[i]) {
      revPos.push(i);
      if (revPos.length > 2) {
        return false;
      }
    } else {
      similar++;
    }
  }
  if (similar == a.length) return true;
  if (revPos.length == 2) {
    if (a[revPos[0]] == b[revPos[1]] && a[revPos[1]] == b[revPos[0]]) {
      return true;
    } else {
      return false;
    }
  }
}
