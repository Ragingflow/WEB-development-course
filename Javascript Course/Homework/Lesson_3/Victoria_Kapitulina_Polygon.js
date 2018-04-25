function polygonSquare(n) {
  if (n > 0) {
    return Math.pow((n-1), 2) + Math.pow(n, 2);
  } else {
    return "ERROR: the number must be greater than zero. Please, try again!";
  }
}
