var ticket = 1230;
function luckyTicket(ticket) {
  var numberToString = ticket.toString().split('');
  firstPartTicket = numberToString.slice(0, numberToString.length/2);
  secondPartTicket = numberToString.slice(numberToString.length/2);
  firstPartTicket = firstPartTicket.reduce(function(sum, current){
    return parseInt(sum) + parseInt(current);
  });
  secondPartTicket = secondPartTicket.reduce(function(sum, current){
    return parseInt(sum) + parseInt(current);
  });
  if (ticket < 10 || ticket >= 1000000) {
    console.log('Номер билета не в диапазоне от 10 до 1000000');
  }
  if (numberToString.length % 2 != 0) {
    console.log('Количество цифр в билете не четное');
  }
  if (firstPartTicket == secondPartTicket) {
    return true;
  }
  else {
    return false;
  }
}
console.log(luckyTicket(ticket));
