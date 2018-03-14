<?php
$someString = "abbcabb";
function palindrom($someString) {
    $l = mb_strlen($someString);
    $newArray = array();
    for($i = 0; $i < $l; $i++) {
        $char = mb_substr($someString, $i, 1);
        if(!array_key_exists($char, $newArray))
            $newArray[$char] = 0;
        $newArray[$char]++;
    }
    foreach($newArray as $key => $value){
        if($value%2 == 0){
            unset($newArray[$key]);
        }
    }
    if(count($newArray)==0 or (count($newArray)==1 and end($newArray)%2!=0)) return true;
    else return false;
}
palindrom($someString);
?>
