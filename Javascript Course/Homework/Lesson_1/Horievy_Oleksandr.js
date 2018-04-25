function checkAge(age) {
  if (age > 0 && age < 2018) {
    return true;
  } else {
    return alert('Год указан не верно!');
  }
}
 function showCentury (age) {
 	
 	res = Math.ceil(age / 100);
 	return res;
 }

var age = prompt('Введите год');

if (checkAge(age)) {
  alert(showCentury(age));
} else {
   '';
}