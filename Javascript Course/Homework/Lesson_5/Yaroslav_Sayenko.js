function increase (arr) {
  var result = [];
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] >= arr[i+1]) {
      if (i !== 0 && arr[i-1] >= arr[i+1] && i+2 !== arr.length && arr[i] >= arr[i+2]) {
        return false;
      }
      else {
        result.push(arr[i+1]);
        if (result.length > 1) {
          return false;
        }
      }
    }
  }
    return true;
}