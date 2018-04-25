var num;

function luckyTicket(num) {
  if(9 < num < 100 && 999 < num < 10000 && 99999 < num < 1000000) {
  var str = num.toString();
  var frstHalf = str.split('');
  var a = frstHalf.length / 2;
  var scndHalf = frstHalf.splice(a, a);
    var sum_1 = 0;
    var sum_2 = 0;
    for(i=0; i < frstHalf.length; i++) {
    sum_1 += parseInt(frstHalf[i])
  }
    for(i=0; i < scndHalf.length; i++) {
    sum_2 += parseInt(scndHalf[i])
  }
  if(sum_1 == sum_2) {
    return true;
  }
else{
  return false;
  }
  }
  else{
  return false;
  }
}


luckyTicket(034034);
