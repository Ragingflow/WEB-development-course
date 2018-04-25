var myArr = [1,12,5,87,32,19];

function lost(n){
    var k = 0;
    function compare(a, b){
      return a-b;
    }
    
    var newN = n.sort(compare);
       
    for(var i=0; i< newN.length-1; i++){
    if(newN[i+1] - newN[i]!=1){
      
         k += newN[i+1] - newN[i]-1;
    }
    }
    return k;
    console.log(k);
  }


lost(myArr);