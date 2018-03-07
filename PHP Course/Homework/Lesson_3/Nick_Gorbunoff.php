<?php
function findPolindrom($str){
	$arr1 = str_split($str);
	$arr2 = (array_count_values($arr1));
	$count = 0;
	foreach ($arr2 as $value) {
		if ($value % 2 != 0)
			$count++;
	}
	if ($count > 1) {
		return true;
	} else {
		return false;
	}
}
$string = "ffooeennnmmsskkttnnf";
findPolindrom($string);
?>