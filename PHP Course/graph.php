<?php


//Библиотека GD2 (http://www.boutell.com/gd/) - поддерживает работу 3-мя форматами (gif, jpg, png)


// Создание и генерация изображения

header("Content-type: image/jpeg");

//  Создание  изображения  (256  цветов)
//$img = imageCreate(500, 300);

//  Создание  изображения  (17  млн.  цветов)
//$img = imagecreatetruecolor(500, 300);

$img = imagecreatefromjpeg('img.jpg');



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



// Отрисовка  эллипса  (или  окружности)

imageEllipse ($img,  200,  150,  300,  200,  $red);
imagefilledEllipse ($img,  200,  150,  300,  200,  $red);


//  Отрисовка  сектора  эллипса

//imageArc($img,  200,  150,  300,  200,  0,  40,  $green);
//imagefilledArc($img,  200,  150,  300,  200,  0,  40,  $green, IMG_ARC_PIE);

/*
Константы для imageFilledArc:
IMG_ARC_PIE
IMG_ARC_CHORD,
IMG_ARC_NOFILL,
IMG_ARC_EDGED*/

imagefilledArc($img,  200,  150,  300,  200,  0,  40,  $green, IMG_ARC_NOFILL | IMG_ARC_EDGED);


//  Отрисовка  строки  текста

//imageString($img,  3,  150,  300,  "Hello!",  $blue);


imageTtfText($img,  30,  10,  300,  150,  $blue, "arial.ttf", "Hello!");



//  Создание  нового  изображения  на  базе существующего

//$img  =  imageCreateFromJPEG("image.jpg");
//$img  =  imageCreateFromGIF("image.gif");
//$img  =  imageCreateFromPNG("image.png");





imagejpeg($img);
