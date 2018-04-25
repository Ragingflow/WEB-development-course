var string1 ="aabcc";
var string2 ="adcaa";
   function duplicateCharacters(string1, string2){
    var result = 0;
    var re = /^[a-z]+$/;
    var stringObj1 = {};
    var stringObj2 = {};
if( !(re.test(string1)&&re.test(string2))){
  return false;
}
  string1.split('').map(function(e){
    stringObj1[e] = !stringObj1[e]?1:stringObj1[e]+1;
  });
 
  string2.split('').map(function(e){
    stringObj2[e] = !stringObj2[e]?1:stringObj2[e]+1;
  });
 
  for (var key in stringObj1) {
   if(stringObj1.hasOwnProperty(key)&&stringObj2.hasOwnProperty(key)){
        if(stringObj1[key]>stringObj2[key]) result += stringObj2[key]
        else result += stringObj1[key]
   }
}
  return result;
 }

duplicateCharacters(string1, string2);
