var arrayOfStrings = ["aba", "aa", "ad", "vcd", "aba"];

function getMaxStrings(array) {

  var longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }

  return array.filter(function(string) {
    return string.length === longest;
  });
}

getMaxStrings(arrayOfStrings);
