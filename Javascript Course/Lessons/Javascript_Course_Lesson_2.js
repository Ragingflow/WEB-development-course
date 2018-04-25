// Прототипы

// var Human = {
//   type : "Human",
//   head : 1,
//   legs : 2
// };


// var Megahuman = Object.create(Human);

// Megahuman // {}
// Megahuman.type //  'Human'
// Megahuman.head // 1
// Megahuman.head = 2;
// Megahuman.head
// Megahuman.hands = 10;
// Megahuman.hands // 10
// Human.hands // undefined


// Удаление свойства

// delete Megahuman.head;
// Megahuman.head // 1
// Megahuman


// Функции

// function myFuncName (x, y, z) {

// };

// myFuncName.name // 'myFuncName'
// myFuncName.length // 3


// var average = function(x, y) {
//   return(x+y)/2
// }

// //average(10,20) // 15
// average.name // 'average'
// average.length // 2


// this

// function getIt() {
//     return this.x;
// }

// var obj1 = {get: getIt, x: 1}
// var obj2 = {get: getIt, x: 2}

// obj1.x //1
// obj2.x //2

// obj1.get() // 1
// obj2.get() // 2


// var obj = {
//     base : 13,
//     average : function (x, y) {
//         return (this.base+x+y)/3;
//     }
// };


// Arguments

// function myFuncName (x, y, z) {
//   return arguments;
// }

// myFuncName (1,2,3,4,5,6,7,8);

// var average = function () {
//     var i = 0;
//     var sum = 0;
//     for(i=0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum/arguments.length;
// };

// average() // NaN
// average(12) // 12
// average(1, 4, 5) // 3.3333333333333335


// Область видимости
// Лексическая область видимости

// function init() {
//     var name = "Mozilla"; // name - локальная переменная, созданная в init
//     function displayName() { // displayName() - внутренняя функция
//         alert (name); // displayName() использует переменную, объявленную в родительской функции
//     }
//     displayName();
// }
// init();

// var a = 10;
// (function() {
//     console.log(a);
//     var a = 11;
// })();

// undefined

// Variable hoisting - поднятие переменных
// var a = 10;
// (function() {
//     var a;
//     console.log(a);
//     a = 11;
// })();


// Замыкания (closures)

// function makeFunc() {
//   var name = "Mozilla";
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// };

// var myFunc = makeFunc();


// 1. Пример использования замыканий - создание новых функций на лету в уже запущенной программе

// function greeting(name) {
// var text = "Hello " + name;
// var greet = function() {
//     console.log(text)
// }
// return greet;
// }

// var a1 = greeting('John');
// a1();
// var a2 = greeting('Alex');
// a2();


// Эмуляция приватных методов с помощью замыканий
// var Counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function() {
//             changeBy(1);
//         },
//         decrement: function() {
//             changeBy(-1);
//         },
//         value: function() {
//             return privateCounter;
//         }
//     };
// })();

// //alert(Counter.value()) // 0
// Counter.increment()
// Counter.increment()
// alert(Counter.value()) // 2


// Наследование

// Конструктор

function Human(name) {
    this.name = name;
}

Human.prototype.say = function(what) {
    console.log(this.name + ": " + what);
}

// var alex = new Human('Alex');

//alex.name // 'Alex'



//alex.say('Hello'); // Alex: Hello


// function Human(name) {
// if(! (this instanceof Human) ) {
//   return new Human(name);
// }
// this.name = name;
// }


// Замена контекста

// var alex = new Human('Alex');
// alex.say("hi");

// var jack = new Human('Jack');
// jack.say("hi");


// alex.say.apply(jack, ["hi"]); // Jack: hi


// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

// var parent = { a : 1 };
// var child = object(parent);
// child.a // 1


// var parent = {name : 'Alex'};
// var child = Object.create(parent);
// child //returns {} but
// child.name // returns 'Alex'



