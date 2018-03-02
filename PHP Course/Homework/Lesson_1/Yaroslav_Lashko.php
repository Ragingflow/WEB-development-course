<?php
  function arrayToAscending($arr) {
    $steps = 0;
      for ($i = 0; $i < count($arr) - 1; $i++) {
        if ($arr[$i] > $arr[$i + 1]) {
            $diff = $arr[$i] - $arr[$i + 1] + 1;
            $arr[$i + 1] += $diff;
            $steps += $diff;
        } else if ($arr[$i] == $arr[$i + 1]) {
            $arr[$i + 1] += 1;
            $steps += 1;
        }
      }
      return $steps;
  }
            
?>
