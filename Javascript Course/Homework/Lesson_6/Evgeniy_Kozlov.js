function ticket(num){
  if(num<10||num>=Math.pow(10, 6)) return false;
  var Array = String(num).split('').map(Number);
  var middle = (Array.length/2)-1;
  var firstPartArray = 0; 
  var secondPartArray = 0;
  for (var i=0;i<=middle; i++){ 
   firstPartArray += Array[i];
  }
  for (var k = middle+1; k<=Array.length-1; k++){
    secondPartArray += Array[k];
  }
  if(firstPartArray === secondPartArray&&Array.length%2 === 0) return true;
  return false;
}
 ticket(1230);
