<?php
function polindrom( $string ) {
    $arr = [];
    $len = strlen($string);
    $even = $len%2 == 0;
    $attempt = 0;

    for($i; $i<$len; $i++ ) {
        $l = $string{$i};
        $arr[$l] = isset($arr[$l]) ? ++$arr[$l] : 1;
    }

    foreach($arr as $v) {
        if($v%2 != 0) {
            if($even) {
                return false;
            } else {
                $attempt++;
                if($attempt > 1) {
                    return false;
                }
            }
        }
    }

    return true;
}

$str = 'abca';

var_dump( polindrom($str) );