<?php
function steps($arr) {
    $countStep = 0;
    $arrLength = count($arr);
    for ($i = 1; $i < $arrLength; $i++) {
        while ($arr[$i] <= $arr[$i-1]) {
            $arr[$i]++;
            $countStep++;
        }
    }
    return $countStep;
}
?>
