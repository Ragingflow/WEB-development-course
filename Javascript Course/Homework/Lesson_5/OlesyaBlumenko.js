var myArr = [1, 3, 2, 1];

function lost(n){
   var k = true ;

    
    for(var i=1; i< n.length; i++){
      
      
     if(n[i+1]<n[i-1]  || n[i+1]==n[i-1]){
       k = false;
     }
      
    }
  return k;
  }


lost(myArr);