// var a = [1, 1, 4];
// var b = [1, 2, 3];
// var a = [1, 2, 3];
// var b = [1, 10, 2];
var a = [1, 4, 2, 5, 3, 7, 4, 8, 4, 2, 25];
var b = [1, 4, 2, 5, 3, 3, 7, 8, 4, 2, 25];
function compareArr(a,b) {
  if (a.length != b.length) {
    return false;
  }
  var count = 0;
  var flag = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      if (!flag) {
        flag = true;
        for (var j = i; j < b.length; j++) {
          if ((a[j] != b[j]) && (b[j] == a[i])) {
            [b[i], b[j]] = [b[j], b[i]];
            count++;
            break;
          }
        }
        if (count == 0) return false;
      } else {
        return false;
      }
    }
  }
  return true;
}
console.log(compareArr(a, b));
