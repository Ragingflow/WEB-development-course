var string1 = "aabcc",
    string2 = "adcaa";
          
function repeatLetters(string1, string2) {
  var arr1 = string1.split(''),
      arr2 = string2.split(''),
      obj1 = {},
      obj2 = {},
      sum = 0;
      
  arr1.forEach(function(item, i, arr1) {
    if( obj1[item] ) {
      obj1[item]++;
    } else {
      obj1[item] = 1;
    }
  });
  
  arr2.forEach(function(item, i, arr2) {
    if( obj2[item] ) {
      obj2[item]++;
    } else {
      obj2[item] = 1;
    }
  });
  
  for(var i in obj1) { 
     if (obj1.hasOwnProperty(i) && obj2.hasOwnProperty(i)) {
       var n = obj1[i] >= obj2[i] ? obj2[i] : obj1[i];
       sum = sum + n;
     }
  }
  return sum;
      
}

repeatLetters(string1, string2);