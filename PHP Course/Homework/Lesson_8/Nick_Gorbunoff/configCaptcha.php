<?php

session_start();

header("Cache-Control: no-cache");

header("Content-type: image/png");

$captcha_length = 6;

$random = [];

for ($i = 0; $i < $captcha_length; $i++){
	$random[$i] = chr(rand(97, 122));
}

$random_str = implode("", $random);

$_SESSION['rand_code'] = $random_str;

$image = imagecreatetruecolor(170, 50);

$black = imagecolorallocate($image, 0, 0, 0);
$white = imagecolorallocate($image, 255, 255, 255);

imagefilledrectangle($image, 0, 0, 170, 50, $white);
imagerectangle($image, 0, 0, 169, 49, $black);

// $line_num = rand(7, 10);

// for ($i=0; $i<$line_num; $i++){
// 	imageline($image, rand(0, 20), rand(1, 50), rand(150, 170), rand(1, 50), $black);
// }

for($i = 0; $i < $captcha_length; $i++) {

		$size = rand(20, 30);
		$angle = rand(-30, 30);
		$x_axis = 20 + ($i * 20);
		$y_axis = rand(30, 40);
		$color = rand($black, $white);

	imagettftext ($image, $size, $angle, $x_axis, $y_axis, $color, "font/verdana.ttf", $random[$i]);
}

imagepng($image);