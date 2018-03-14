<?php
// $str = "aabb"; // true
// $str = "abbcabb"; // true
// $str = "abca"; // false

function isPalindrome($str){
  $odd = 0;
  foreach (count_chars($str, 1) as $i => $val) {
    if ($val % 2 != 0){
      $odd++;
    }
  }
  return $odd > 1 ? false : true;
}

var_dump(isPalindrome($str));
?>