function isLuckyNumber(ticket) {
  var luckyTicket = ticket.toString();
  var ticketLen = luckyTicket.length;
  var left = luckyTicket.substring(0, ticketLen / 2);
  var right = luckyTicket.substring(ticketLen / 2);
  function add(string) {
    string = string.split("");
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
      sum += parseInt(string[i], 10);
    }
    return sum;
  }
  if (ticketLen % 2 === 0 && ticket >= 10 && ticket <= Math.pow(10, 6)) {
    return add(left) === add(right);
  } else {
    return false;
  }
}
isLuckyNumber(239017);
isLuckyNumber(1230);
