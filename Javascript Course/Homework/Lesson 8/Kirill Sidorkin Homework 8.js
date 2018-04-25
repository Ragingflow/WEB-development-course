function mas(m){
  var long=m[0].length;
  for (var i=0;i<m.length;i++){
    if (m[i].length>long){
      long=m[i].length;
    }
    else{
      continue;
    }
  }
  var newmas=m.filter(function(n){
    return n.length>=long;
  })
  return newmas;
}
var m=['aba', 'aa','ad' , 'vsd', 'aba'];
mas(m);
