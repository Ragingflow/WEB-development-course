<?php
$string = 'The ((quick (brown) (fox) jumps over the lazy) dog)';

function reversString( $str ) {
    $regexFind = '/\(([^\(\)]*)\)/';
    preg_match_all( $regexFind, $str, $matches);

    if( !empty($matches[0])) {
        $reverseArrayStr = [];
        foreach( $matches[1] as $v){
            $reverseArrayStr[] = strrev($v);
        }
        $newStr = str_replace($matches[0], $reverseArrayStr, $str);


        return reversString( $newStr  );
    }


    return $str;
}

var_dump( reversString($string) );