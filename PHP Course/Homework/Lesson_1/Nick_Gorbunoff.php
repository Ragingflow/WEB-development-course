<?php
function replaceNumbers($array){
    $steps = 0;
    for ($i = 0; $i < count($array) - 1; $i++) {
        if ($array[$i + 1] <= $array[$i]) {
            $steps += ($array[$i] - $array[$i + 1] + 1);
            $array[$i + 1] += ($array[$i] - $array[$i + 1] + 1);
        }   
    }
    print $steps;
}
$array = [1, 1, 1]; //3
$array = [-1000, 0, -2, 0]; //5
replaceNumbers($array)
?>