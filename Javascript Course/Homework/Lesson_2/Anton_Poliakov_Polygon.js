function getAmountOfSquares(value) {
  if (value > 0) {
    return Math.pow(value, 2) + Math.pow(value - 1, 2);
  } else {
    return "Give a number from 1 to infinity, please.";
  }
}

getAmountOfSquares(0);
