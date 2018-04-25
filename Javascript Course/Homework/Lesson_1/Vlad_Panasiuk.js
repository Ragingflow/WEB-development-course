function centuryCounter(year) {
  if (year > 0 && year <= 2017) {
    console.log(Math.ceil(year/100));
  }
  else {
    console.log("Год указан неверно");
  }
}



centuryCounter(1935);
