function Array(newArray){
  var sortArray = newArray.sort(function (a,b) {
    return a-b;
  });
  var res = [];
  var i = 0;
  var j = i;
  while(i<= sortArray.length-1){
    if (sortArray[i]==sortArray[i+1]-1){
      i++;
    }  
    
      while(sortArray[j]<=sortArray[i+1]){
      res.push(sortArray[j]);
      sortArray[j] += 1; 
     }
      i++;
  }
  if(res.length <= sortArray.length-1) return 0;
  return res.length - sortArray.length;
}
Array([8, 2, 3, 6]);
