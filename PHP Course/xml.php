<?php



// PHP 5 и XML.

// XML (Extensible Markup Language)


// XML разметка

//<?xml  version="1.0"  encoding="windows-1251"  ? ><!-- // XML декларация-->

/*

<!--  Пример  XML  разметки  --> // Комментарий

<catalog> // Элемент документа (корневой элемент)
    <book  id="1"> // id="1" - Атрибут
        <title>XML  и  IE5</title> // Элемент, 'XML  и  IE5' - текстовые данные
        <author>Алекс  Гомер</author> // Элемент, 'Алекс  Гомер' - текстовые данные
        <price  currency="RUR">200</price> // Элемент, '200' - текстовые данные
        <exists  /> // Элемент
    </book>
</catalog>

*/


// Описание структуры документа


// DTD–Document Type Definition

/*

<!ELEMENT catalog (book+)>
<!ELEMENT book (title, author+, price, exists?)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!ELEMENT exists (#PCDATA)>
<!ATTLIST price currency  CDATA  #IMPLIED>

<?xml version="1.0"
<!DOCTYPE catalog SYSTEM "catalog.dtd">


*/



// XML Схемы

/*

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="страна" type="Страна"/>
  <xs:complexType name="Страна">
    <xs:sequence>
      <xs:element name="название" type="xs:string"/>
      <xs:element name="население" type="xs:decimal"/>
    </xs:sequence>
  </xs:complexType>
</xs:schema>


<страна xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="country.xsd">
  <название>Франция</название>
  <население>59.7</население>
</страна>

*/


//Средства PHP  для работы с XML



// SAX (Simple API for XML)


/*
 *
<catalog> // Начало XML-элемента
<book> // Начало XML-элемента
  <author>L.Argerich</author> // Начало XML-элемента, текстовый узел, конец элемента
</book> // Конец XML-элемент
</catalog> // Конец XML-элемента

*/

/*

//Создание  парсера
$parser  =  xml_parser_create  (["encodig"]);

//encoding:  ISO-8859-1,  UTF-8  и  US-ASCII

//Определение  функций  обработки
function  onStart($xml,  $tag,  $attributes){}
function  onEnd($xml,  $tag){}
function  onText($xml,  $data){}

//Регистрация  функций
xml_set_element_handler  ($parser,"onStart","onEnd");
xml_set_character_data_handler  ($parser,"onText");

//Запуск  парсера
xml_parse($parser,  "XML  в  виде  строки");
*/



/*
//Создание парсера
$parser = xml_parser_create();



function  onStart($xml,  $tag,  $attributes){
    if($tag == 'CATALOG') {
        echo '<table>
                <tr>
                <td>author</td>
                <td>title</td>
                <td>pubyear</td>
                <td>price</td>
                </tr>';
    }

    else if ($tag == 'BOOK'){
        echo '<tr>';
    }

    else if ($tag == 'AUTHOR' || $tag == 'TITLE' || $tag == 'PUBYEAR' || $tag == 'PRICE') {
        echo '<td>';
    }
}



function  onEnd($xml,  $tag){
    if($tag == 'CATALOG') {
        echo '</table>';
    }

    else if ($tag == 'BOOK'){
        echo '</tr>';
    }

    else if ($tag == 'AUTHOR' || $tag == 'TITLE' || $tag == 'PUBYEAR' || $tag == 'PRICE') {
        echo '</td>';
    }
}


function  onText($xml,  $data){
    echo $data;
}


//Регистрация  функций
xml_set_element_handler  ($parser,"onStart","onEnd");
xml_set_character_data_handler  ($parser,"onText");

$xml = file_get_contents('xml/catalog.xml');
$result = xml_parse($parser,  $xml);

*/



// DOM (Document Object Model)
$dom  =  new  DOMDocument();
$dom->load("xml/catalog.xml");
/*

// В конструктор можно передать 2 параметра: версию xml и кодировку.
// Передавать их нужно только мы если создаем новый документ
$dom  =  new  DOMDocument("1.0","utf-8");




//Доступ  к  корневому  элементу
$root = $dom->documentElement;

//Получение  типа  элемента
$type  =  $root->nodeType;


//Получение  всех  потомков  любого  элемента
$children  =  $root->childNodes;

//Получение  текстового  содержимого
//echo  $root->textContent;


//Обращение  к  узлам  с  определенным  именем
$title  =  $dom->getElementsByTagName("title");

echo $title->item(0)->textContent;

*/


// Создание нового XML-элемента
/*
//Доступ  к  корневому  элементу
$root  =  $dom->documentElement;


//Создание  нового  XML-элемента
$bookDOM  =  $dom->createElement("book");
$titleDOM  =  $dom->createElement("title");

//Создание  нового  текстового  элемента
$titleText  =  $dom->createTextNode("PHP5");


//Присоединение  новых  элементов  к  родительским элементам
$titleDOM->appendChild($titleText);
$bookDOM->appendChild($titleDOM);
$root->appendChild($bookDOM);


$dom->save('xml/new_catalog.xml');

//Вариант  создания  нового  XML-элемента  с  текстом
$titleDOM  =  $dom->createElement("title","PHP  5");

*/




// SimpleXML, приципы работы


/*
//Конвертируем XML-файл в объект
$sxml = simplexml_load_file("xml/catalog.xml");


//Вывод названия первой книги
echo $sxml->book[1]->title;

//Изменение автора второй книги
$sxml->book[1]->author = "New Author";


//Конвертируем объект в XML
$xmlContent = $sxml->asXML("xml/new_catalog.xml");

*/


// XSL/T (Extensible Stylesheet Language /Transformations)



// Пример XSL-документа

/*
<?xml version="1.0"   encoding="UTF-8"   ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" />
  <xsl:template match="/">
     ...
     <xsl:apply-templates select="/catalog/book" />
     ...
  </xsl:template>
  <xsl:template match="book[price  < 200]">
     ...
     <xsl:apply-templates   select="./*"   />
     ...
  </xsl:template>
  <xsl:template   match="book/*">
     ...
     <xsl:value-of   select="."   />
     ...
  </xsl:template>
</xsl:stylesheet>

*/


// Применение таблицы XSL к XML-документу на стороне сервера

// Загрузка  исходного  XML-документа
$xml  =  new  DOMDocument();
$xml->load('xslt/catalog.xml');

// Загрузка  таблицы  стилей  XSL
$xsl  =  new  DOMDocument();
$xsl->load('xslt/catalog.xsl');


//Создание  XSLT-процессора  и  загрузка  в  него стилевой  таблицы
$processor = new XSLTProcessor();
$processor->importStylesheet($xsl);

//Выполнение  трансформации  и  получение результатов
$html = $processor->transformToXml($xml);

echo $html;




