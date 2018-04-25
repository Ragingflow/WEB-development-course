function isLucky(number) {
  var string = number.toString();
  var left = 0, right = 0;

  if (string.length % 2 === 1) {
    return 'Amount of digits must be even';
  }

  for (var i = 0; i <= string.length - 1; i++) {
    if (i < string.length / 2) {
      left += Number(string[i]);
    } else {
      right += Number(string[i]);
    }
  }

  return left === right;

}

isLucky(1230);
