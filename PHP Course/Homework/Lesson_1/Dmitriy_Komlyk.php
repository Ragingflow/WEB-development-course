<?php
function minStep($someArray) {
    $sumStep = 0;
    $newArray = [];
   foreach($someArray as $key => $value) {
     if($key == 0) { $newArray[] = $value; continue;}
     if(end($newArray) < $value){ $newArray[] = $value; continue;}
     if(end($newArray) >= $value) {
         $sumStep += (end($newArray)-$value)+1;
         $step = $sumStep+$value;
         $newArray[] = $step;
     }
   }
   return $sumStep;
};
minStep([-1000, 0, -2, 0]);
?>
