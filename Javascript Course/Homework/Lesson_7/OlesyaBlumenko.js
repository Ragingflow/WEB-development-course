function priceAp(matrix){

      var n = 0;
      
     if(matrix.length < 1 || matrix.length > 5 ) {return false};
     
       
        for(var i=0; i< matrix.length; i++){
          
        if(matrix[i].length < 1 || matrix[i].length > 5){return false};
        
          for(var j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] < 0 || matrix[i][j]> 10){return false
              
            }else if(matrix[i][j] === 0 ){
            if(i != matrix.length - 1){
            matrix[i + 1][j]= 0;
          
        }
      }
       n+=matrix[i][j];
      }
      
      }
      
      return n;
}