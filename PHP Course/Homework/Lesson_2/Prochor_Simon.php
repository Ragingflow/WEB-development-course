<?php
$string = 'a(bcdefghijkl(mno)p)q';

function reversString( $str ) {
    $regex = '/\([^\(\)]*\)/';
    preg_match( $regex, $str, $matches);

    if(isset($matches[0])) {
        $reverseStr = str_replace(['(',')'], '', $matches[0]);
        $reverseStr = strrev($reverseStr);

        return reversString( preg_replace($regex, $reverseStr, $str) );
    }


    return $str;
}

var_dump( reversString($string) );