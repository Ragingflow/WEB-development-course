function winningTicket( ticket ) {
  var n = ticket.toString(),
      l = n.length;
      
  if(  l % 2 == 1 || l > 6 ) {
    return 'not corect ticket';
  }
  
  var c = l / 2,
      left = n.substring(0,c).split('').reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
      }),
      right = n.substring(c).split('').reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
      });
  
  return left == right;
}
winningTicket(302122);