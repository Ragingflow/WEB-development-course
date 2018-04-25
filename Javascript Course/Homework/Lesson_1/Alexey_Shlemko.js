function getCenturyFromYear(year){
  return year > 0 && year <= 2017 ? Math.floor((year-1)/100)+1 : "Incorrect year";
}
