function isContinuous(array) {
  var arrayCopy = array.slice();

  for (var i = 0; i < array.length; i++) {
    array.splice(i - 1, 1);
    var cycle = 0;

    for (var j = 1; j < array.length; j++) {
      cycle += array[j - 1] < array[j];
    }

    if (cycle === array.length - 1) {
      return true;
    }

    array = arrayCopy.slice();
  }
  
  return false;

}

isContinuous([1, 3, 2, 1]);
