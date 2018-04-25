function same(a,b){
  var diff=[];
  if (a.length!=b.length){
    return false;
  }
  for (var i=0;i<a.length;i++){
      if (a[i]!=b[i]){
        diff.push(i);
      }
      else continue;
    }
    if (diff.length>2 || diff.length==1){
      return false;
    }
    else if (a[diff[0]]==b[diff[1]] && a[diff[1]]==b[diff[0]]){
      return true;
    }
    else{
      return false;
    }
}
var a = [4, 6, 3], b = [3, 4, 6];
same(a,b);