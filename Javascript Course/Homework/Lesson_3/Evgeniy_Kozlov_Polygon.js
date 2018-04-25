function minUnitPolygon (n) {
   var res;
    if (n >= 1) {
     var a = Math.pow (n, 2);
     var b = Math.pow (n-1, 2);
     res = a+b;
   }
   return res;
 } 
 minUnitPolygon(4);
