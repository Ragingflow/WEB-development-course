// The function takes an array of integers and returns true, if after deleting a maximum of one number from the array,
// the values of the remaining elements will go in ascending order. False will return if the values are not in ascending order
// or the incoming array does not match the task.
function ascendingArray(integerArr) {
  // BEGIN check for integer array
  if (Array.isArray(integerArr)) {
    for (var i in integerArr) {
      if ((integerArr[i] ^ 0) !== integerArr[i]) {
        return false;
      }
    }
  } else {
    return false;
  } // END check for integer array
  var biggerNumbers = 0,
    smallerNumbers = 0;
  for (var k = 0; k < integerArr.length - 1; k++) {
    if (integerArr[k] >= integerArr[k + 1]) {
      biggerNumbers++;
    }
    if (k !== 0 && integerArr[k - 1] >= integerArr[k + 1]) {
      smallerNumbers++;
    }
  }
  return biggerNumbers <= 1 && smallerNumbers <=1 ? true : false;
}
