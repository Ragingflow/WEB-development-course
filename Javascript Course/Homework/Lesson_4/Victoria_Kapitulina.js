function missingNumber(array){
  var fullArray=[];
  for (num = Math.min(...array); num <= Math.max(...array); num++){
       fullArray.push(num);
  }
  var missing = fullArray.filter(function(i){
    return array.indexOf(i) == -1;
  });
  return missing.length;
}

missingNumber([6, 2, 3, 8]);