
// Массивы

// Создание массива

//Рекомендуемый способ
// var myArray = [];
// var cities = ['Moscow', 'Almaty', 'Kiev', 'London', 'Ottawa'];


// var a = new Array('Moscow', 'Almaty', 'Kiev'); // [ 'Moscow', 'Almaty', 'Kiev' ]
// var a = new Array(3); // [, , , ]
// var a = new Array(3, 8); // [ 3, 8 ]


// length

// var a = ['a', 'b', 'c'];
// a.length //

// a[10] = 'd';
// a.length // 11


// a.length = 1;
// a // ['a']


// Многомерные массивы
// var a = [1, 'b', 'string', {a: 1, b:2, c:3}, ['a', 'b', 'c']];

// a[4][1] // 'b'


// Методы массива

// var a = ['a', 'b', 'c'];
// delete
// delete a[1];
// a // [ 'a', , 'c' ]

// splice
// a.splice(1,2);
// a // [ 'a' ]

// a[3] = 'd';

// a[a.length] = 'd';
// a // [ 'a', 'b', 'c', 'd' ]

// Способы перебора массива
// var a = [ 'a', 'b', ,'c', 'd' ];

// for (var i=0; i < a.length; i++) {
//   console.log(a[i])
// }

// for (var i in a) {
//   console.log(a[i])
// }


// reduce
// function adder(a, b) { return a + b }
// var c = [9, 2, 5, 6, 7];
// c.reduce(adder, 0); // 29

// concat
// c = [9, 2, 5, 6, 7];
// a = [1, 2];
// d = c.concat(a, 'end');
// d // [ 9, 2, 5, 6, 7, 1, 2, 'end' ]

// push
// c = [9, 2, 5, 6, 7];
// c.push(8);
// c // [ 9, 2, 5, 6, 7, 8 ]

// pop
// c = [9, 2, 5, 6, 7];
// var last = c.pop();
// c // [ 9, 2, 5, 6 ]
// last // 7


// join
// var c = [9, 2, 5, 6, 7];
// c.join(); // '9,2,5,6,7'
// c.join('+'); // '9+2+5+6+7'


// sort - сортирует массив как строки даже если это числа
// var hey = [1, 12, 5, 87, 32, 19];
// hey.sort(); // [ 1, 12, 19, 32, 5, 87 ]

// function compare(a, b) { return a-b; }
// hey.sort(compare); // [ 1, 5, 12, 19, 32, 87 ]


// reverse
// var hey = [1, 12, 5, 87, 32, 19];
// hey.reverse(); // [ 19, 32, 87, 5, 12, 1 ]

// Ассоциативный массив

// obj.property = x; // Создания свойств в объектах
// obj["property"] = x; // Альтернативный метод создания свойств в объектах

// a = [1, 2];
// a["property"] = 45;
// a // [ 1, 2, property: 45 ]
// a["property2"] = 45;
// a[10] = 'ten';
// a.length // 11
// a // [ 1, 2, <8 empty items>, 'ten', property: 45, property2: 45 ]


// Регулярные выражения


// RegExp - конструктор регулярных выражений в javascript

// new RegExp("\\w+c", "igm");


// var re = /\w+c/igm;

// Методы

// test

// var reg = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/; // любой email
// reg.test("sdddfdfd"); // false
// reg.test("dfdfd@dfdgfd") // false
// reg.test("test@example.com") // true

// exec
// var input = "fsfdsds8sd8dsfds##$sdD";
// var reg = /\d/g;
// reg.exec(input);

// var arr;
// while ( (arr = reg.exec(input)) != null ) {
// console.log(arr['index']); // выводим первый элемент массива arr
// }


// search

// "asdffdRf3454352454Dsdcg;343w$#%s2234s".search(/\d{2,8}/)  // 8

// match

// "asdffdRf3454352454Dsdcg;343w$#%s2234s".match(/\d{2,8}/) // [ '34543524',
//   index: 8,
//   input: 'asdffdRf3454352454Dsdcg;343w$#%s2234s' ]


// replace
// var str = "Apple thinks different because apple is different";
// //str.replace("Apple", "Google"); 'Google thinks different because apple is different'
// str.replace(/apple/ig, "Google"); // 'Google thinks different because Google is different'


// 'Klim Trakht'.replace(/(\w+)\s(\w+)/, 'my name is $2 $1'); 'my name is Trakht Klim'

function func(m) {
    return "+" + m.toUpperCase();
}

"DFDERERFdfffSFDFFfdfFvbFeRgfhgdfg".replace(/[a-z]/g, func); // 'DFDERERF+D+F+F+FSFDFF+F+D+FF+V+BF+ER+G+F+H+G+D+F+G'

// split

"Apple thinks different because apple is different".split(/apple/i); // [ '', ' thinks different because ', ' is different' ]


