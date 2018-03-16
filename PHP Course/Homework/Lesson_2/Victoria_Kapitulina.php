<?php 

// $str = "a(bc)de"; // "acbde"
// $str = "a(bcdefghijkl(mno)p)q"; // “apmnolkjihgfedcbq”
// $str = "abc(cba)ab(bac)c"; // “abcabcabcabc”


function reverseString($string){
  $regExp = '/\((\w*?)\)/';
	do {
	  $string = preg_replace_callback(
	    $regExp, 
	    function ($match){ return strrev($match[1]); },
	    $string);
	} while (strpos($string, '('));
	
	return $string;
}

echo reverseString($str);

?>