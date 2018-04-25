function luckyTicket(ticket){
var sum1 = 0;
var sum2 = 0;
var arr = String(ticket).split("");
var arr2 = arr.slice(0, (arr.length+1)/2);
  for(var i = 0; i < arr2.length; i++){
    sum1 = sum1 + (+arr2[i]); 
  }
var arr3 = arr.slice(-(arr.length+1)/2); 
  for(var j = 0; j < arr3.length; j++){
    sum2 = sum2 + (+arr3[j]); 
  }
  if(sum1==sum2){
    return true;
  }
  else{
    return false;
  }
}
luckyTicket(123402) 
