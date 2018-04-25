<?php
function stepsToIncrementedArray($array)
{
    $steps = 0;
    for ($i = 0; $i < count($array); $i++) {
        if (isset($array[$i + 1])) {
            if ($array[$i] >= $array[$i + 1]) {
                $diff = $array[$i] - $array[$i + 1] + 1;
                $steps += $diff;
                $array[$i + 1] += $diff;
            }
        }
    }
    return $steps;
}