function mas(m){
  var sum=0;
  function length(){
    if ( 1<=m.length && m.length<=5){
      return true;
    }
    else{
      return false;
    }
  }
  function stroke(){
    for (var i=0;i<m.length;i++){
      if (1<=m[i].length && m[i].length<=5){
        sum++;
      }
      else{
        sum--;
      }
    }
    if (sum===m.length){
      return true;
    }
    else{
      return false;
    }
  }
  function column(){
    sum=0;
    for (var i=0;i<m.length;i++){
      for (var j=0;j<m[i].length;j++){
        if (0<=m[i][j] && m[i][j]<=10){
          sum++;
        }
        else{
          sum--;
        }
      }
      if (sum!==m[i].length){
      return false;
      }
      else if (i===m.length-1){
        return true;
      }
      else{
        sum=0;
        continue;
      }
    }
    
  }
  if (length(m)==1 && stroke(m)==1 && column(m)==1){
    sum=0;
    for ( var i=0;i<m.length;i++){
      for (var j=0;j<m[i].length;j++){
        if (m[i][j]===0 && i<m.length-1 && m[i+1][j]!==undefined){
          m[i+1][j]=0;
        }
        else{
          sum+=m[i][j];
        }
      }
    }
  }
  else{
    return false;
  }
  return sum;
}
var m = [[0, 1, 1, 2],
        [0, 5, 0, 0,1],
        [2, 0, 3]];
mas(m)
