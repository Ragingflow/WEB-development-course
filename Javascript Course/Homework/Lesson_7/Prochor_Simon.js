matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]];
          
function matrixPrice(matrix) {
  var sum = 0,
      crush = [];
      
  if( matrix.length<1 && matrix.length > 5) {
   return 'array to big'; 
  }
      
  for(var i =0; i<matrix.length; i++) {
    if( matrix[i].length<1 && matrix[i].length > 5) {
      return 'array to big'; 
    }
    for(var j = 0; j<matrix[i].length; j++) {
      if( matrix[i][j].length<0 && matrix[i][j].length > 10) {
        return 'array to big'; 
      }
      if(crush.indexOf(j) >=0 ) {
        continue;
      }
      if(matrix[i][j] === 0) {
        crush.push(j);
        continue;
      }

      sum += matrix[i][j];
      
    }
  }
  
      
  return sum;
}

matrixPrice(matrix);