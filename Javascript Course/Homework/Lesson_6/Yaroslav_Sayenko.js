function getLuckyTicket (ticket) {
  var string = ticket.toString();
  if (string.length % 2 !== 0 || ticket < 10 || ticket > Math.pow(10,6) || isNaN(ticket)) {
    return "Wrong ticket";
  }
  var arr_1 = string.split("");
  var sum_1 = 0;
  var sum_2 = 0;
  for (i = 0; i < arr_1.length/2; i++) {
    sum_1 += Number (arr_1[i]);
  }
   for(i = arr_1.length/2; i <  arr_1.length; i++) {
    sum_2 += Number (arr_1[i]);
  }
  return sum_1 == sum_2;
}