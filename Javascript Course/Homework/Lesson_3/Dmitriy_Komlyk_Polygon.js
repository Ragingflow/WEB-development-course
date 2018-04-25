 function areaPolygon(n) {
     var result = 0;
     var maxWidth = n+(n-1); //3
     var counter = 1;
  while (counter<maxWidth){
    if(counter%2!==0) result+=counter;
    counter++;
  }
  while (counter){
    if(counter%2!==0) result+=counter;
    counter--;
  }
   return result;
}
 areaPolygon(3);
