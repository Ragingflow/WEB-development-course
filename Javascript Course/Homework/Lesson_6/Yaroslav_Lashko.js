function happyTicket(ticketNumber) {
  if (ticketNumber > 10 && ticketNumber < Math.pow(10, 6)) {
    var integerArray = ticketNumber.toString().split('');
    if (integerArray.length % 2 == 0) {
      var sumFirst = 0, sumSecond = 0;
      for (var i = 0, j = integerArray.length-1; i < j; i++, j--) {
        sumFirst += parseInt (integerArray[i]);
        sumSecond += parseInt (integerArray[j])
      }
      if (sumFirst == sumSecond) {
        return true;
      }
    }
  }
  return false;
}
