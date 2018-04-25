function polygonSquere(n){
  if(n > 0){
    var squere = 2*n-1;
    for(var i = n-1; i > 0; i--){
      squere += 2*(2*i-1);
    }
    return squere;
  }else{
    return 0;
  }
}
