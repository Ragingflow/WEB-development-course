<?php

function arr_inc($arr) {

	$a = 0;
	$b = 1;
	$count = 0;
	$length = (count($arr));

	while ($b < $length) {
		if ($arr[$b] <= $arr[$a]) {
			$arr[$b] = $arr[$b] + 1;
			$count++;
		} else {
			$a++;
			$b++;
		}
	}

	return $count;

}

?>