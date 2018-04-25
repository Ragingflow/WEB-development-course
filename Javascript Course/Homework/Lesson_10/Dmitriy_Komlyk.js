function equalArrays(array1, array2){
  var array1Sort = array1.slice().sort();
  var array2Sort = array2.slice().sort();
  if(array1.length !== array2.length) return false;
var differences = 0;
for(var i = 0; i < array1.length; i++){
   if(array1[i]!==array2[i]){
    differences++;
   }
   if(differences>2) {
    break;
   }
 }
function test(v, i){return v===array2Sort[i]}
  if(differences==2){
    if(array1Sort.every(test)) return true;
    return false;
  }
  if(differences==1) return false;
  if(differences>2) return false;
return true;
}
equalArrays(a, b);
