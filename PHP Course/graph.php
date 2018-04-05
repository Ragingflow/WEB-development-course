<?php


//Библиотека GD2 (http://www.boutell.com/gd/) - поддерживает работу 3-мя форматами (gif, jpg, png)


// Создание и генерация изображения

header("Content-type: image/jpeg");

//  Создание  изображения  (256  цветов)
//$img = imageCreate(500, 300);

//  Создание  изображения  (17  млн.  цветов)
$img = imagecreatetruecolor(500, 300);




// Генерация JPEG-изображения
/*
header("Content-type: image/jpeg");
imageJpeg($img[,"filename"][,quality]);

//  Генерация  GIF-изображения
header("Content-type:  image/gif");
imageGif  ($img[,"filename"]);

//  Генерация  PNG-изображения
header("Content-type:  image/png");
imagePng($img[,"filename"]);
*/

//  Сглаживание  (antialiasing) - работает только для imageCreateTrueColor, но для imageCreate ошибки не будет,
// он просто не отработает
imageantialias($img, true);


//  Определение  цвета
$red = imagecolorallocate($img, 255, 0, 0);
$green = imagecolorallocate($img, 0, 255, 0);
$blue = imagecolorallocate($img, 0, 0, 255);


imageLine($img, 20, 20, 80, 280, $red);


//  Отрисовка  прямоугольника

imagerectangle($img, 20,20, 80, 280, $green);
imagefilledrectangle($img, 40,40, 100, 300, $blue);


// Отрисовка  многоугольника
$points  =  array(0,0,100,200,300,200, 350, 250);

imagepolygon($img, $points, 4, $red );
imagefilledpolygon($img, $points, 4, $red );



imagejpeg($img);
