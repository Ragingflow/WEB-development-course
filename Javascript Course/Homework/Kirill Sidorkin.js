function mas(a){
  var mas1=[];
  var mas2=[];
  for(var i=0; i<a.length-1; i++){
    if(a[i+1]-a[i]<=0){
      mas1.push(a[i]);
    } 
    if(i!==0 && a[i+1]-a[i-1]<=0){
      mas2.push(a[i]);
    }
  }
  if (mas1.length<=1 && mas2.length<=1){
    return true;
  }
  else{
    return false;
  }
}
var a=  [1,1,1,2,3];
mas(a);
