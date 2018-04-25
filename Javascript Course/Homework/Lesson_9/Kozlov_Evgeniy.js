function SameSymbol(string1, string2){
  var object1 = {};
  var object2 = {};
  var result = 0;
  var reg = /[^a-z$]/;   
  if (reg.test(string1)||reg.test(string2)) {
      return false
    }
  for (var i = 0; i < string1.length; i++ ){ console.log(object1.hasOwnProperty(string1[i]))
    if (object1.hasOwnProperty(string1[i])) object1[string1[i]] += 1; 
      else { 
        object1[string1[i]] = 1;
     }
  }
   for (var j = 0; j < string2.length; j++ ){console.log(object2) 
    if (object2.hasOwnProperty(string2[j])) object2[string2[j]] += 1;
      else { 
        object2[string2[j]] = 1;
      }
   }
   
  for (var prop in object1){ console.log(object1[prop])
    if (object1.hasOwnProperty(prop)&&object2.hasOwnProperty(prop)){
       if (object1[prop] >= object2[prop]) {
         result += object2[prop]
        }
        else {
          result += object1[prop]
        }
    }
}
 return result;
}
SameSymbol('aaabcc', 'pdcccaa');
