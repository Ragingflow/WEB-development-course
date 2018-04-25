var matrix  = [[0, 1, 1, 2], 
               [0, 5, 0, 0], 
               [2, 0, 3, 3]];

function priceApartment(someArray){
  var result = 0;
  var i = 0;
    if(1>someArray.length||someArray.length>5) return false;
    for(var j=0; j<someArray.length; j++){
        if(1>someArray[j].length||someArray[j].length>5) return false;
    }
    var countArray = someArray.length; 
     var newArray = someArray.reduce(function(arr1, arr2){
        return arr1.concat(arr2);
     });
     var step = newArray.length/countArray;
     while(i<newArray.length) {
        if(0>newArray[i]||newArray[i]>10) return false;
        if(newArray[i] === 0&&i<newArray.length-someArray[0].length) newArray.splice(i+step,1,0);
     result+=newArray[i];
     i++;
     }
 return result;
}
priceApartment(matrix);
