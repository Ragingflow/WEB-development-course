function filterArray(someArray){
var result;
var counter = 0;
var removed;

 if(someArray.length<=1) return true;
    while(counter<=someArray.length-1){
       removed = someArray.splice(counter, 1);
         if(compare(someArray)) return true;
       someArray.splice(counter, 0, removed[0]);
    counter++;
  }
 function compare(arr){
     for(var i = 0; i<=arr.length-1; i++){
                 if(arr[i]>=arr[i+1]){ 
                   result = false;
                   break;
                 }
                 result = true;
          }
          return result;
}
  return result;
}
filterArray([1, 3, 2, 1]);
