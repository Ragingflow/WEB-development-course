function fun(number){
  var numberArray =  number.toString().split('').map(Number);
  var firstArray = numberArray.slice(0, numberArray.length/2);
  var secondArray = numberArray.slice(numberArray.length / 2, number.length);
  
  
  var sumFirstArray = 0;
  for (var i = 0; i<firstArray.length; i++){
    sumFirstArray +=firstArray[i];
  }
  
  // console.log(sumFirstArray);
  
  var sumSecondArray = 0;
  for (var j = 0; j<secondArray.length; j++){
    sumSecondArray +=secondArray[j];
  }
  // console.log(sumSecondArray);
   
  if(sumFirstArray == sumSecondArray){
    return true
  } else {
    return false
  }
   
}

fun(1001);
