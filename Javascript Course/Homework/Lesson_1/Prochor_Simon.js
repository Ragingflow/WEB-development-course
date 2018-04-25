function century(year) {
  var curentYear = new Date().getFullYear();
  if( year<1 || year >curentYear ) {
    return 'Year is not correct';
  }
  return Math.ceil(year / 100);
}
  
century(2018);