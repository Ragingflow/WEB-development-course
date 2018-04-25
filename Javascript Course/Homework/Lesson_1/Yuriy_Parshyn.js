var year = +prompt('Введите год', 2017);
function century(year) {
  if (year < 1 || year > 2017 || isNaN(year) == true) {
    alert('Год указан не правильно');
  }
  else {
    alert(Math.ceil(year/100));
  }
}
century(year);

































