function biggestArrString (arr){
  
  var m = [];

  var n = arr.map(function(item) {
     return item.length;
  });
  
   function max(a , b) {
       if(a > b){
         return a;
       }else{
         return b;
         }
       }
  
    n = n.reduce(max);
  
    for(var i = 0; i < arr.length; i++){
  
       if(arr[i].length === n){
    
        m.push(arr[i]);
       }
}

     return m;

   }