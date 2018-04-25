function area(n){
  var a=0;
  for (var i=1; i<=n*2-1; i+=2){
    a +=i;
  }
  area=a*2-(n*2-1);
  return area;
}
area();

function area(n) {
  var area=2*n*n-2*n+1;
return area;
}
area();
