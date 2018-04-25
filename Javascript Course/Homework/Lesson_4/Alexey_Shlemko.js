function getMissingNumbersCount(arr){
  var missingNumbersCount = 0;
  arr.sort(function(a,b){return a-b});
  for(var i = 0; i < arr.length-1; i++){
    if(arr[i+1] != arr[i]){
      missingNumbersCount += arr[i+1]-arr[i]-1;
    }
  }
  return missingNumbersCount;
}
