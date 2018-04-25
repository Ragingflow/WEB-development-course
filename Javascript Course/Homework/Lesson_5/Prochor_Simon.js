function isGrowing(arr){
  var n1=0,
      n2=0;
  
  for(var i=0; i<arr.length-1; i++){
    if(arr[i] >= arr[i+1]){
      n1++;
    } 
    if(arr[i-1] >= arr[i+1]){
      n2++;
    }
  }
  
  if (n1 <= 1 && n2 <= 1){
    return true;
  } else {
    return false;
  }
}

isGrowing([1, 1, 2, 1, 3]);
//isGrowing( [1, 3, 2] );