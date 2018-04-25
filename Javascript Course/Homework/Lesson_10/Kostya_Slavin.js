function check_arr(ar1, ar2) {
  let ar_new = [];
  let array_check = ((a,b) => a.every((el,i) => a[i] === b[i]) && a.length === b.length); //pure function
  if (array_check(ar1, ar2)) {
   return true;
  }
			
  ar1.map((el, i) => (ar1[i] !== ar2[i]) ? ar_new.push({'index': i, 'element': el}) : null);
  if (ar_new.length === 2) {
    ar1[ar_new[0].index] = ar_new[1].element;
    ar1[ar_new[1].index] = ar_new[0].element;
    return array_check(ar1, ar2);
  }
  return false;
}
