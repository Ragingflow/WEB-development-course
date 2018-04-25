function longestElemArr(n) {
  var newArr = [];
   var stringLength = n[0].length;

  for (var i = 0; n.length > i; i++) {

    if (n[i].length == stringLength) {
      newArr += n[i];
    } else if (n[i].length > stringLength) {
      newArr = [];
      newArr += n[i];
      stringLength = n[i].length;
    }
  }
  return newArr;
}