matrix = ['aba', 'aa', 'ad', 'vcd', 'aba'];
          
function getLong(matrix) {
  var maxLength = 0,
      newMatrix = [];
      
  for(var i =0; i<matrix.length; i++) {
    var l = matrix[i].length;
    if(l>maxLength) {
      maxLength = l;
      newMatrix = [ matrix[i] ];
    } else if(l == maxLength) {
      newMatrix.push(matrix[i]);
    }
  }
  
      
  return newMatrix;
}

getLong(matrix);