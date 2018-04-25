// console.log('Hello Webpack');


// Understanding ES6 Essentials

// Assignment with let and const


// pre-es6 assignment


//let


// var limit = 100;
// console.log(limit);
//
//
// let limit = 100;
// console.log(limit);

/*

var limit = 200;
{
    var limit = 10; // error, changes the original limit.
    console.log('backstage limit', limit);
}
console.log('venue limit', limit);
*/

/*
let limit = 200;
{
    let limit = 10; // error, changes the original limit.
    console.log('backstage limit', limit);
}
console.log('venue limit', limit);
*/


// const

// const limit = 200;

// const limit = 300; // error

// console.log(limit);

// const emails = ['frodo@email.com', 'samwise@example.com', 'merry@example.com'];

// emails = [] // error

// emails.push('test@example.com') // valid
//
//
// console.log(emails);


/*
function hello() {
    let message = "Hello!";
    console.log(message);
}

function greeting() {
    let message = "How are you?";
    console.log(message);
}

hello();
greeting();
*/


// Template Literals


/*
let a = `good
bad
1
2
3
`;
*/

// let a = `good`;

// let greeting = `${a} morning`;

// let greeting = a + " morning";


// console.log(greeting);

/*

let b = 'birthday';
let c = `Happy ${b}!`
console.log(c);

*/


// Spread Operator

// let a = [20, 30, 40];
// let b = [10, 50];


// let a = [20, 30, 40];
// let b = [10, 50, ...a];

// let a = [20, 30, 40];
// let b = [10, ...a, 50];

// let a = ['Dana', 'Erik', 'Frank'];
// let b = ['Alice', 'Bob', 'Carl', ...a];

// console.log(b);


// Rest Parameters

// function collect(...a) {
//     console.log(a);
// }
//
// collect(1, 2, 3, 4, 5);



// Destructuring Assignment on Arrays and Objects

// let z = [4, 5, 6];

// let four = z[0];
// let five = z[1];

// let [four, ,five, six, seven] = z;

// console.log(four, five, six, seven);


// let king = { name: 'Mufasa', kids: 1 };

// let name = king.name;
// let kids = king.kids;

// let { name, kids } = king;

// let {  kids, name } = king;

// let name, kids;

// { name, kids } = king;  // error; standalone block, not destructuring assigment.

// ({ name, kids } = king); // valid destructuring assignment
//
//
// console.log(name, kids);




// Presenting Methods and Modules


// Arrow Functions

// ( ) => { … }

// function cheer() {
//     console.log("Woohoo!")
// }

/*var cheer = function() {
    console.log("Woohoo!")
}*/


/*setTimeout(() => {
    console.log("Woohoo!")
}, 3000);*/



// let cheer = () => {
//     console.log("Woohoo!");
// }


// let cheer = x => console.log(x);


// cheer("Woohoo!");




// Map helper method

/*
let values = [20, 30, 40];

let double = (n) => {
    return n*2;
}
*/


// let doubled = values.map(double);


/*let doubled = values.map((n) => {
    return n*2;
});*/

// let doubled = values.map(n => n*2);
//
// console.log(doubled);




// Filter helper method

// let points = [7, 16, 21, 4, 3, 22, 5];

/*let highScores = points.filter((n) => {
    return n > 15;
});*/

// let highScores = points.filter(n => n>15);

// console.log(highScores);


// String Helper Methods

// String.repeat()

// let b = "wooh" + "oo".repeat(50);
// let b = "wooh" + " ".repeat(50) + "oo";
// console.log(b)

// The search methods for strings include .startsWith, .endsWith, .includes
// console.log("butterfly".startsWith("butter")); // true
// console.log("butterfly".startsWith("fly")); // false
// console.log("butterfly".endsWith("fly")); // true
// console.log("butterfly".includes("butter")); // true

// console.log("butterfly".includes("caterpillar")); // false
// console.log("butterfly".includes("ter")); // true


// Checking Numbers

// Number.isFinite


// const addToCart = (item, number) => {
//     return Number.isFinite(number);
// }

// console.log(addToCart('shirt', 5)); // true
// console.log(addToCart('shirt', Infinity)); // false

// console.log(addToCart('shirt', "Infinity")); //false
// console.log(addToCart('shirt', Math.pow(2, 54))); //true


// Number.isSafeInteger

// -Math.pow(2, 53) - 1) - Math.pow(2, 53) - 1)  // safe



// Modules

// import { fellowship } from './fellowship.js'

// import { fellowship, total } from './fellowship.js'
//
// console.log(fellowship);
// console.log(total);

// import { add, multiply} from "./math";
//
// console.log('add', add(5, 10));
// console.log('multiply', multiply(5, 10));

// import multiply from './math';
// console.log('multiply', multiply(5, 10));



// OOP & Classes

/*
class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
    }
}

let king = new Animal("Mufasa", 4.5);
console.log(king);
console.log(king.hello());
*/



// Inheritance

import Animal from './Animal'
//
// class Lion extends Animal {
//
// }
// let son  = new Lion("Simba", 2)
//
//
// console.log(son);
// console.log(son.hello());

/*class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height)
        this.color = color;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from Pride Rock!`);
    }
}

let son = new Lion("Simba", 2, "golden");
console.log(son);
console.log(son.hello());*/


// Static methods
/*

class Calculator {
    static multiply(a, b) {
        return a*b;
    }

    static add(a, b) {
        return a+b;
    }
}

let a = Calculator.multiply(5,7);
console.log(a);
*/


// ProtoTypes
/*

function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;
    this.greet = () => `I'm ${this.name} from ${this.house}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");




Wizard.prototype.pet_name;
Wizard.prototype.info;
harry.pet_name = "Hedwig";
harry.info = function () {
    return `I have a ${this.pet} named ${this.pet_name}.`;
}


console.log(harry);
console.log(harry.info());

*/

// Presenting Data Structures in ES6


// Set
/*

let a = new Set();

a.add(5);
a.add(43);
a.add("woohoo");
a.add({ x: 50, y: 200 });

a.add(43);
a.add({ x: 50, y: 200 });

console.log(a);
console.log(a.size);

console.log(a.has(5)); // true
console.log(a.has(7)); // false

*/

/*

let numbers = [5, 7, 8, 13, 17];

let numSet = new Set(numbers);


console.log(numSet);

for (let element of numSet.values()) {
    console.log(element);
}
*/

// let chars = "aweifawjeoanehmwofeuawhfhwuei";
// let chars_arr = chars.split("");
// let chars_set = new Set(chars_arr);
//
//
// console.log(chars_set)


// Maps

/*

let a = new Map();

let key_1 = 'string key';
a.set(key_1, 'return value for a string key')


let key_2 = { a: 'key '};
a.set(key_2, 'return value for a object key')


let key_3 = function() {};
a.set(key_3, 'return value for a function');


console.log(a);*/

/*

let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];

let valMap = new Map(twoDee);

// console.log(valMap);

for (let [key, value] of valMap.entries()) {
    console.log(`${key} => ${value}`);
}
*/

/*
let string = "eowiuraowehpamennoawponeienuaperunaewopinu";
let letters = new Map();
for (let i=0; i<string.length; i++) {
    let letter = string[i];
    if(letters.has(letter) === false){
        letters.set(letter, 1);
    }
    else {
        letters.set(letter, letters.get(letter)+1);
    }
}

console.log(letters);

*/



// Closures and Scoping

/*

let call = () => {
    let secret = 'ES6 rocks';
}
console.log(secret); // error

*/

/*

let call = () => {
    let secret = 'ES6 rocks';
    let reveal = () => {
        console.log(secret);
    }
    return reveal;
}

let unveil = call();
unveil();
*/




// Function Factories
/*

const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}


let add_ness = addSuffix("ness");
let h = add_ness("happi");


console.log(h)
*/

/*
const product = (x) => {
    return y => {
        return x * y;
    }
};*/

/*


const product = (x) => y => x * y;

let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(3));

*/


// Private Methods
/*


const budget = () => {
    let balance = 0;
    const changeBal = (val) => {
        return balance += val;
    }

    const deposit20 = () => changeBal(20);

    const withdraw20 = () => changeBal(-20);

    const check = () => balance;

    return {
        deposit20, // deposit20: deposit20,
        check,
        withdraw20
    };
};

let wallet = budget();

console.log(wallet.check());

wallet.deposit20();
wallet.withdraw20();

wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();

console.log(wallet.check());

*/


// Generators

/*
function* letterMaker() {

    yield 'a';
    yield 'b';
    yield 'c';

}

let letterGen = letterMaker();


console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
*/

/*


function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        yield count;
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

*/
/*


function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        let reset = yield count;
        if (reset) {
            count = 0;
        }
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);

*/

// Generators vs Iterators

/*

const arrayIterator = (array) => {
    let index = 0;

    return {
        next: () => {
            if (index < array.length) {
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
}


let it = arrayIterator([1, 2, 3]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/

/*

function* arrayIterator() {
    // yield arguments;
    /!*for (let arg of arguments){
        yield arg;
    }*!/
    yield* arguments
}


var array = [1, 2, 3];
let it = arrayIterator(...array);

console.log(it.next().value);
console.log(it.next().value);
*/



// Asynchronous Programming and Promises

/*

function onFulfilled() {
    console.log('success')
}

function onRejected() {
    console.log('fail')
}
*/

/*

let promise = new Promise(function(resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
    // resolve('success');
    //reject()

    // throw new Error("o_O");
})
*/

/*


promise.then(onFulfilled, onRejected);

promise.then(onFulfilled); //success
promise.then(null, onRejected); // fail

promise.catch(onRejected);
*/

/*

let p = new Promise((resolve, reject) => {
    // resolve('Resolved promise data');
    reject('Rejected promise data');
});

p.then(response => console.log(response))
.catch(error => console.log(error));

*/
/*

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved promise data'), 3000);
});

p.then(response => console.log(response))
    .catch(error => console.log(error));


*/

/*

let promise = new Promise((resolve, reject) => {

    // через 1 секунду готов результат: result
    setTimeout(() => resolve("result"), 1000);

    // через 2 секунды — reject с ошибкой, он будет проигнорирован
    setTimeout(() => reject(new Error("ignored")), 2000);

});

promise
    .then(
        result => alert("Fulfilled: " + result), // сработает
        error => alert("Rejected: " + error) // не сработает
    );

*/


// APIs and ES6 Fetch

/*
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, {
    method: 'GET'
})
    .then(response => {
        return response.json();
    })
    .then(json => console.log(json));

*/



// let a = Math.pow(2, 5);
// console.log(a);

// let a = 2**5
// console.log(a);


// let b = "wonderful".includes("wonder");
// console.log(b);

// let b = [2, 3, 4, 5, 6].includes(4); // true
// console.log(b);

/*

let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
}

let keys = Object.keys(obj);
console.log(keys);


let values = Object.values(obj);
console.log(values);


let entries = Object.entries(obj);
console.log(entries);

*/



// ES8 Proposal - Async
/*

async function async_one() {
    return "one";
}


async_one().then(response => console.log(response));


async function async_two() {
    throw new Error('Issue with async!');
}


async_two().catch(error => console.log(error));


*/


function async_one() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('one');
        }, 2000);
    });

}


async function async_two() {
    return "two"
}


async function async_three() {
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
}


async_three();
