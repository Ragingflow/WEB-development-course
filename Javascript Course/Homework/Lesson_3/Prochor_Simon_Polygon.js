function arithmeticPolygonCounter( n ){
  var previousComposition = Math.pow(n-1, 2),
      curentComposition = Math.pow(n, 2);
  return curentComposition + previousComposition;
}
//arithmeticPolygonCounter(7) //version 1

function loopPolygonCounter( n ){
  var center = n*2-1,
      piramida = 0;
      
  var full = '\u25FC',
      cleare = '\u25FB',
      graphic = '';
      
  graphic = full.repeat(center);
      
  function addLine(i) {
    var l = i - 2;
    if(l > 0) {
      var clearN = (center - l)/2,
          lineG = cleare.repeat(clearN) + full.repeat(l) + cleare.repeat(clearN);
      
      graphic = lineG + '\n' + graphic + '\n' + lineG;
      piramida = piramida + l;
      return addLine(l);
    } else {
      console.log( graphic );
      return center + 2*piramida;
    }
  }
  return addLine(center);
}
loopPolygonCounter(10); //version 2