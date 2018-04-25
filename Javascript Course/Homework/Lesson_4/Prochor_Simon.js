function lastCount(arr){
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  
  if( min <= 0 ) {
    return 'the minimum number must be > 0';
  } else if( min == max ) {
    return 0;
  } else {
    return max - (min - 1) - arr.length;
  }
} 

lastCount( [6, 2, 3, 8] );