function similar(a , b){
   var n = 0;
   var string1 = a.join(',');
   var string2 = b.join(',');
   var arr1 = a.concat().sort().join(',');
   var arr2 = b.concat().sort().join(',');


  if(string1 === string2){
  return true;
  }
  
  if(arr1 != arr2){
    return false;
  }
  
  for (var i = 0; i < a.length; i++){
  if(a[i] !== b[i]){
  for (var j = i; j < b.length; j++){
        if(a[i] ===  b[j] || a[j] === b[i]){
            n++;
            
        }
            
  }
}
}
  if(n>1){
    return false;
  }else{
    return true;
  }
}