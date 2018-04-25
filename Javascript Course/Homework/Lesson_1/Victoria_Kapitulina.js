function whichCentury(year) {
  if (year > 0 && year < 2018) {
    return "It's " + Math.ceil(year / 100) + " century";
  } else {
    return "Year is incorrect. Please, try again!";
  }
}
