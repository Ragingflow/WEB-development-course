function luckyTicket(number){
   var arr = String(number).split('').map(Number);
   var lenght = arr.length/2;
   if((lenght ^ 0) === lenght&&number<=Math.pow(10,6)&&number>=10){
      var removed = arr.splice(0,lenght);
      var number_1 = removed.reduce(function(a, b){
          return a+b;
       });
       var number_2 = arr.reduce(function(a, b){
          return a+b;
       });
  
     console.log(number_1);
     console.log(number_2);
       if(number_1!=number_2) return false;
       return true;
      
   }
  
 return false;
}
luckyTicket(111111);
