//The function takes an array of integers and returns the number of missing numbers 
//that need to be added to the number series after it is sorted to get
//a series of numbers with an interval of 1. If the array contains not only integers, the function returns false
function missingNumbers(integerArr) {
  if (Array.isArray(integerArr)) {
    for (var i in integerArr) {
      if ((integerArr[i] ^ 0) !== integerArr[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  var min = Math.min.apply(null, integerArr);
  var max = Math.max.apply(null, integerArr);
  var result = 0;
  for (var j = min + 1; j < max; j++) {
    if (!integerArr.includes(j)) {
      result++;
    }
  }
  return result;
}
