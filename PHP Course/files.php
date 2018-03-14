<pre>
<?php



// Работа с файлами

//echo

// Существует ли файл?
// file_exists("test.txt");

//Узнаем размер файла
//filesize("test.txt");

//Дата последнего обращения к файлу
// $atime = fileatime("test.txt");
// date('d.m.Y H:i:s', $atime);

//Дата изменения файла
//filemtime("test.txt");
//date("d M Y", $mtime);

//Дата создания файла(Windows)
//filectime("test.txt");
//date("d M Y", $ctime);



// Файлы: режимы работы

//fopen('test.txt', 'r');

//* `r` — открыть файл только для чтения;
//* `r+` — открыть файл для чтения и записи;
//* `w` — открыть файл только для записи. Если он существует, то текущее содержимое файла уничтожается. Текущая позиция устанавливается в начало;
//* `w+` — открыть файл для чтения и для записи. Если он существует, то текущее содержимое файла уничтожается. Текущая позиция (курсор) устанавливается в начало;
//* `а` — открыть файл для записи. Текущая позиция устанавливается в конец файла;
//* `а+` — открыть файл для чтения и записи. Текущая позиция устанавливается в конец файла;
//* `b` — обрабатывать бинарный файл. Этот флаг необходим при работе с бинарными файлами в ОС Windows.


$f = fopen('test.txt', 'a+') or die('Error');

//Примеры
//$f = fopen("http://www.you_domain/test.txt","r");
//$f = fopen("ftp://user:password@ftp.you_domain/test.txt", "r");

// Читаем файл:
//fread($f, 10);

/*

print_r(fread($f, 10));
echo '<br>';
print_r(fread($f, 10));
echo '<br>';
print_r(fread($f, 10));
*/

// указать заведомо большое число символов
//fread($f, 9999);

// определить длину файла и указать ее
//$file = fread($f, filesize('test.txt'));


// Прочитать строку из файла:
// fgets($f)
/*
print_r(fgets($f));
print_r(fgets($f));
print_r(fgets($f, 10));
*/


// Прочитать строку из файла и отбросить HTML-теги:

// fgetss($f, 100, '<br><a>');


// Считывает символ из файла:
//print_r(fgetc($f));
//print_r(fgetc($f));
//print_r(fgetc($f));
//print_r(fgetc($f));
//print_r(fgetc($f));



// Файлы: запись
//fwrite($f, " New text");


// Файлы: манипуляции с курсором
// SEEK_SET — движение начинается с начала файла;
// SEEK_CUR — движение идет от текущей позиции (по-умолчанию);
// SEEK_END — движение идет от конца файла.

/*
fseek($f, -10, SEEK_END );
print_r(fread($f, 10));


fseek($f,
print_r(fread($f, 0));
*/

//Узнаем текущую позицию
//$pos = ftell($f);


// сброс курсора - передвигаем его в начало
//rewind($f);


// конец файла - возвращает true если мы достигли конца файла, в остальных случаях - false
//feof($f);


//
// fclose();



// Файлы: прямая работа с данными

// Получаем содержимое файла в виде массива
//print_r(file('test.txt'));

// Чтение файла в одну большую строку целиком
//file_get_contents('test.txt');


// Запись
//file_put_contents('test.txt', 'New content');

/*
$array = ["I", "love", "you"];
file_put_contents('test.txt', $array);
*/


// Файлы: управление

// Копирование файла
//copy('test.txt', 'newfile.txt');

// Переименование файла
//rename('test.txt', 'newfile.txt');

// Удаление файла
//unlink('newfile.txt');



// Директории: работа и манипуляции

// Создание директории
//mkdir('newdir');

// Desired folder structure
/*
$structure = './depth1/depth2/depth3/';

if (!mkdir($structure, 0777, true)) {
    die('Failed to create folders...');
}
*/

// Удаление директории
//rmdir(string dirname)// удаляется только если она пустая!


// Открываем директорию
$dir = opendir('Homework');

// Читаем директорию
//$name = readdir($dir);
/*
print_r(readdir($dir));
echo "<br>";
print_r(readdir($dir));
echo "<br>";
print_r(readdir($dir));
echo "<br>";
print_r(readdir($dir));
*/

//Закрываем директорию
//closedir($dir);


// Это файл?
//echo is_file('test.txt');

//Это директория?
//echo is_dir('Homework');


// Сканируем директорию
//scandir(string dirname [, int order])

//print_r(scandir('.'));
//print_r(scandir('.', 1));




//print_r(file_get_contents('test.txt'));





?>
</pre>
