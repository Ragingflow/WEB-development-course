function century (number){
  if (number <= 0 || number  > 2017 || isNaN(number)){
    return  'Год указан не правильно'
  } else if (number % 100 === 0) {
    return Math.round(number * 10 / 1000);
  } else return Math.ceil(number * 10 / 1000);
}
century ( 1500 );