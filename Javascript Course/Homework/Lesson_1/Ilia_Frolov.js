var year = prompt("Введите год", "");

function getCentury() {
  //Проверка
  if (isFinite(year) //число
  && parseInt(year) == year //целое число
  && year<=2017 //не болше 2017
  && year>=1) //не менше 1
  {
 var century = Math.ceil(year/100);
  alert(year + " год это - " + century + " век")
  }
  else{
    alert("Год указан не правильно")
  }
}
getCentury();
