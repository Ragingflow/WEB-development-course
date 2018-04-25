function lucky(a) {
  if (a > 10 && a < Math.pow(10, 6)) {
    var arr = a.toString().split('');
    if (arr.length % 2 == 0) {
      var sum1 = 0;
      var sum2 = 0;
      for (var i = 0, k = arr.length - 1; i < k; i++, k--) {
        sum1 += parseInt(arr[i]);
        sum2 += parseInt(arr[k]);
      }
      if (sum1 == sum2) {
        return true;
      }
    }
  }
  return false;
}
lucky(145154);
