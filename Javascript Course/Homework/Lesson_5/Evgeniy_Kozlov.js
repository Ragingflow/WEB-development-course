function filterArr(someArray) { 
  var arr = someArray.slice();
  var step;
  for (var i = 0; i < someArray.length; i++) {
    someArray.splice(i-1, 1);
    step = 0;
    for (var j = 1; j < someArray.length; j++) {
      step += someArray[j-1] < someArray[j];
    }
    if (step === someArray.length-1) {
      return true;
    }
    someArray = arr.slice();
  }
  return false;
}
filterArr([1, 3, 2, 1]);
