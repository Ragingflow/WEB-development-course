function getArrayOfLongestStrings(array) {
  var arrayOfLongest = [];
  var currentLongest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > currentLongest) {
      currentLongest = array[i].length;
      arrayOfLongest.push([array[i]]);
    } else if (array[i].length == currentLongest) {
      arrayOfLongest[arrayOfLongest.length-1].push(array[i]);
    }
  }
  return arrayOfLongest[arrayOfLongest.length - 1];
}
