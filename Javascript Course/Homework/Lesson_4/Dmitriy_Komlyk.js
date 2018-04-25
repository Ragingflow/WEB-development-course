function myArray(someArray){
  function compare(a,b) {return a-b;}
     var newArray = someArray.sort(compare);//[2,3,6,8}
     var lengthArray = newArray[newArray.length-1] - newArray[0]; 
     var result= [];
     var i = 0;
 
  while(i<=lengthArray){
    result.push(newArray[i]);
    i++;
  }
  return result.length - newArray.length ;
}
myArray([8, 2, 3, 6]);
