function filterString(someString){
var result;
var biggestArray = someString[0];

function filterArray(Array, index){
    return Array.length==biggestArray.length ;
}
 
for(var i=0; i< someString.length; i++){
    if(someString.length<=1) result = someString
    if(someString[i].length > biggestArray.length){
        biggestArray = someString[i];
        result = someString.filter(filterArray);
    }
    if(someString[i].length<biggestArray.length) {result = someString.filter(filterArray)}
}
return result;
}

filterString(['aba', 'aa', 'ad', 'vcd', 'aba']);
