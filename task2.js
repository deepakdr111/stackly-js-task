//  Part 1: Variables — var, let, const (6 Questions)

var a = 10
a = 20 
console.log(a); //20

var b = 30 
var b = 50
console.log(b); //50

let c = 100
c = 200
console.log(c); //200

const age = 21
console.log(age); //21

console.log("var a = 1;(valid)");
console.log("let b = 2;(valid)");
console.log("const c = 3;(valid)");
console.log("const d;(invalid - missing initializer)");
console.log("let b = 4; in same scope (invalid - redeclaration)");

var name = "Deepak";
let age = 21;
const city = "Chennai";

console.log(name); //Deepak
console.log(age); //21
console.log(city); //Chennai


// Part 2: Printing Statements and Data Types (6 Questions)


let name = prompt("Enter your name:");
alert("Hello, " + name);


let age = prompt("Enter your age:");
console.log(age);

let answer = confirm("Do you know JavaScript?");
console.log(answer);  // Click OK → true Click Cancel → false


let fruit = "Apple";
let price = 50;
let isAvailable = true;
let result;
console.log(fruit, typeof fruit); //Apple string
console.log(price, typeof price); //50 number
console.log(isAvailable, typeof isAvailable); //true boolean    
console.log(result, typeof result); //undefined undefined


let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
console.log(fruits); // ["Apple", "Mango", "Orange", "Banana", "Grapes"]
console.log(fruits[0]); // "Apple"
console.log(fruits[fruits.length - 1]); // "Grapes"


let items = {
    fruits: ["Apple", "Mango", "Orange"],
    electronics: ["Laptop", "Mobile", "TV"],
    vegetable: "Carrot"
};
console.log(items.fruits); // ["Apple", "Mango", "Orange"]  
console.log(items.electronics); // ["Laptop", "Mobile", "TV"]
console.log(items.vegetable);  // "Carrot"


// Part 3: Arithmetic Operators (6 Questions)


let a = 15;
let b = 4;
console.log(a + b); // 19
console.log(a - b); // 11
console.log(a * b); // 60
console.log(a / b); // 3.75


console.log(27 % 5); // 2


console.log(3 ** 4); // 81


let num = 10;
console.log(++num); // 11


let num = 10;
console.log(--num); // 9


let x = 5;
let y = x++;
console.log(x); // 6
console.log(y); // 5


// Part 4: Pre/Post Increment and Decrement (12 Questions)

let a = 4;
console.log(a++); // 4
console.log(a); // 5

let a = 4;
console.log(++a); // 5
console.log(a); // 5

let a = 8;
let b = a++;
console.log(a); // 9
console.log(b); // 8

let a = 8;
let b = ++a;
console.log(a); // 9
console.log(b); // 9

let a = 6;
let b = a--;
console.log(a); // 5
console.log(b); // 6

let a = 6;
let b = --a;
console.log(a); // 5
console.log(b); // 5

let a = 2;
a++;
a++;
console.log(a); // 4

let a = 10;
--a;
--a;
console.log(a); // 8

let b = 3;
b = b++;
console.log(b); // 3

let c = 4;
let d = c++;
console.log("c:", c); // 5
console.log("d:", d); // 4

let e = 5;
let f = --e;
console.log("e:", e); // 4
console.log("f:", f); // 4

let a = 5;
let b = a++;
let c = ++a;
console.log(a); // 7
console.log(b); // 5
console.log(c); // 7