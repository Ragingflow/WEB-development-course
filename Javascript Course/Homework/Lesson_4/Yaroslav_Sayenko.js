function getDifference(arr) {
  var sort = arr.sort(function(a, b) {
    return a - b;
  });
  var differ = [];
  for (var i = sort[0]; i <= sort[sort.length - 1]; i++) {
    differ += i + ' ';
  }
  differ = differ.split(' ');
  return (differ.length-1) - (sort.length);
}