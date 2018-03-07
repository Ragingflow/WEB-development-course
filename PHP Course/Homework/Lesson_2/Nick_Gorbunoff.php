<?php
	function invertStr($str) {
	    preg_match_all( "/\(([^()]*)\)/" , $str, $matches);
		while( $matches[0] == true) {
		    foreach ($matches[1] as &$value) {
		    	$invertArr[] = strrev($value);
		    }
		    $invertStr = str_replace($matches[0], $invertArr, $str);	    
		    return invertStr($invertStr);
		}
		return $str;
	}
	$string = 'The ((quick (brown) (fox) jumps over the lazy) dog)';
	invertStr($string);
?>