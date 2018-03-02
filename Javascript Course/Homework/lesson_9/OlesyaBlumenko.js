function countMatches(string1, string2){
var k = 0;
var arr1 = string1.split('');
var arr2 = string2.split('');
var retest = /^[a-z]+$/, gmi; 
if(retest.test(string1) && retest.test(string2) ){
for(var i = 0; i<arr1.length; i++){
  for(var j=0; j<arr2.length; j++ ){
    if(arr1[i]==arr2[j]){
    k++;
    arr2.splice(j, 1);
    break;
     
    }
  }
}
return k;

}else{
  return false
}
}