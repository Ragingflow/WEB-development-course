function isTicketLucky(number) {
  var arr = number.toString().split('');
  var sum1 = arr.slice(0, arr.length / 2).reduce(arraySum);
  var sum2 = arr.slice(arr.length / 2, arr.length).reduce(arraySum);
  return sum1 == sum2;
  function arraySum(a, b) {
    return Number(a) + Number(b);
  }
}
