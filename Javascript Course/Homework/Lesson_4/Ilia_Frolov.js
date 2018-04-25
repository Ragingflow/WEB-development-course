function findLosts(numb){
  var min = numb[0];
  var max = min;
  for (i = 1; i < numb.length; ++i) {
      if (numb[i] > max) max = numb[i];
      if (numb[i] < min) min = numb[i];
  }
  var result = (max-min+1)-numb.length;
  return(result);
}
