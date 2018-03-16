<?php 

$a=[-1000, 0, -2, 0]; // 5
//$a=[1, 1, 1]; // 3

function minSteps($array){
  $steps = 0;
  $j = 1;
  $count_arr = count($array);
  
  while($j < $count_arr){

    if($array[$j] <= $array[$j-1]){
      $array[$j]++;
      $steps++;
      continue;
    }
    $j++;
  }

   return $steps;
}

echo minSteps($a);

?>