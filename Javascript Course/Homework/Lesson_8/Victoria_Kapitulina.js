var arr = ["aba", "aa", "ad", "vcd", "aba"];
function longestString(arr) {
  var longestLen = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  var str = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i].length === longestLen[0].length) {
      str.push(arr[i]);
    }
  }
  if(arr.length>1) {
   return str;
   } else {
     return arr;
   }
}
longestString(arr);
