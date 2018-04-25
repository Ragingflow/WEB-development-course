function priceApartments(houseScheme) {
  if (houseScheme.length >= 1 && houseScheme.length <= 5) {
    var totalPrice = 0;
    for (var i = 0, j = 0; j < houseScheme[i].length; ) {
      if (houseScheme[i].length < 1 || houseScheme[i].length > 5) {
        return false;
      }
      if (i < houseScheme.length - 1) {
        if (houseScheme[i].length != houseScheme[i + 1].length) {
          return false;
        }
      }
      if (houseScheme[i][j] < 0 || houseScheme[i][j] > 10) {
        return false;
      }
      if (houseScheme[i][j] == 0) {
        if (i != houseScheme.length - 1) {
          houseScheme[i + 1][j] = 0;
        }
      }
      totalPrice += houseScheme[i][j];
      i++;
      if (i == houseScheme.length) {
        i = 0;
        j++;
      }
    }
    return totalPrice;
  }
  return false;
}
