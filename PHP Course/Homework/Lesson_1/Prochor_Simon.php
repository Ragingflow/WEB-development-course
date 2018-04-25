<?php
$array = [-1000, 0, -2, 0];

function stepsCountrt( $arr ) {
    $step = 0;
    for($i = 0; $i<count($arr); $i++) {
        if (isset($arr[$i + 1])) {
            $curent = $arr[$i];
            $next = $arr[$i+1];
            if( $curent >= $next ) {
                $d = $curent - $next + 1;
                $step += $d;
                $arr[$i+1] += $d;
            }
        }
    }
    return $step;
}

var_dump( stepsCountrt($array) );