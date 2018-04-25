function CostApartment(matrix){
   if (1 > matrix.length || matrix.length > 5) return false;
   var result = 0;
   for (var i = 0; i < matrix.length; i++) {
     if (1 > matrix[i].length || matrix[i].length > 5) return false;
       for (var j = 0; j < matrix[i].length; j++) {
         if (0 > matrix[i][j] || matrix[i][j] > 10) return false;
         if (i > 0){
         if (matrix[i-1][j] === 0){
             matrix[i][j] = 0;
           }
         }
         if (matrix[i][j] !== 0){
          result = result + matrix[i][j];
        }
      }
    }
   return result;
}
CostApartment([[0, 0, 1, 0],
               [0, 5, 0, 0],
               [2, 0, 10, 3]]);
