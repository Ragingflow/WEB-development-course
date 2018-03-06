<?php
function minStep($someArray) {
    $sumStep = 0;
    $newArray = [];
   foreach($someArray as $key => $value) {
     if($key == 0) { $newArray[] = $value; continue;}
     if(end($newArray) < $value){ $newArray[] = $value; continue;}
     if(end($newArray) == $value) { $newArray[] = $value+1; $sumStep+=1; continue;}
     if(end($newArray) > $value) {
         $sumStep += (end($newArray)-$value)+1 ;
         $step = ((end($newArray)-$value)+1)+$value;
         $newArray[] = $step;
     }
   }
   return $sumStep;
};
minStep([-1000, 0, -2, 0]);
?>
