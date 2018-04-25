function years(num) {
  var todayYear = new Date().getFullYear()
  if(num>=1&&num<=todayYear){
   var result = Math.ceil(num/100);
    return result; 
  }
  else{
    alert('Год указан не правильно');
  }
}
years(parseInt(prompt('Введите год')));
