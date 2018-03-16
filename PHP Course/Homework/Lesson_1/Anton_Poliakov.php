<?php

$arr = [1, 4, 10];

function sortSteps($arr) {
    $steps = 0;

    foreach($arr as $key => $value) {
        if ($key > 0 && $arr[$key + 1] <= $arr[$key]) {
            $arr[$key]++;
            $steps++;
            return $arr;
        }
    }
};

print_r(sortSteps($arr));