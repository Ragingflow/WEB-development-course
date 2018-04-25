// Автоматическая расстановка ‘;’

// неправильная запись

// return
// {
//   answer: 42 };

// // правильная запись

// return  {
//   answer: 42 };

// Разница между равенством и тождественным равенством

// 'test' == 'test' //true
// '0' == '' //false
// 0 == '' //true
// false == 'false' //false
// false == '0' //true

// false == undefined // false
// false == null //false
// null == undefined // true

// var a = new String('test');
// var b = 'test';
// var c = new String('test');
// a==b // true
// c==b // true
// a==c // false

// var h =1;
// function test() {
//   h = 10;
//   return h;
// }

// test()
// h // 10

// function test() {
//   var h = 10;
//   return h;
// }

// test()
// h // 10

// Не используйте eval

// eval(' var h = 10 ');

// var x = 1;
// function test () {
//   var x = 1;
//   eval('x=3');
//   return x;
// }

// test ()
// x // 1

// var x = 1;
// function test () {
//   var x = 1;
//   var evil = eval
//   evil('x=3');
//   return x;
// }

// test ()
// x

// Преобразование булевых значений в числа с помощью опреатора ‘+’

//[] // []
// []+[] // ''
// '' == false // true
// !false // true
// !'' // true
// !([]+[]) // true

//+true // 1
// +false //0
// +[] // '0'
// !+[] // true

//+!+[] // 1
// []+![] // 'false'

([] + ![])[+!+[]]; // 'a'