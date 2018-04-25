function same(a,b){
  var sum=0;
  var reg=/^[a-z]+$/;
  if (!reg.test(a) || !reg.test(b)){
    return false;
  }
  var x=a.split('');
  var y=b.split('');
  for (var i=0;i<x.length;i++){
    for (var j=0;j<y.length;j++){
      if (x[i]==y[j]){
        delete y[j];
        sum++;
        break;
      }
      else continue;
    }
  }
  return sum;
}
var a = "aabcc",b = "adcaa";
same(a,b);
