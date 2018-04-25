function isArrayTheSame (arr1, arr2){
  let count = 0;
  const firstLen = arr1.length;
  const secondLen = arr2.length;

  if(firstLen !== secondLen){
    return false;
  } 

  for(var front = 0; front < firstLen; front++){
    if(arr1[front]!== arr2[front]){
      break;
    }
  }

  for(var back = firstLen - 1; back >= 0; back--){
    if(arr1[back]!== arr2[back]){
      break;
    }
  }

  [arr2[back], arr2[front]] = [arr2[front],arr2[back]];

  for(let i = 0; i < firstLen; i++){
    if(arr1[i]===arr2[i]){
      count++;
    }
  }

  return count === arr1.length ? true : false;
}

isArrayTheSame(a,b);