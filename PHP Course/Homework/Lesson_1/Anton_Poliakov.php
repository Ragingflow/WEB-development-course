<?php

$arr = [1, 2, 1];

function sortSteps($arr) {
    $steps = 0;

    foreach($arr as $key => &$value) {
        if ($key > 0 && $arr[$key - 1] >= $arr[$key]) {
            $diff = $arr[$key - 1] - $arr[$key];
            $arr[$key] += $diff + 1;
            $steps += $diff + 1;
        }
    }

    return $steps;
};

print_r(sortSteps($arr));