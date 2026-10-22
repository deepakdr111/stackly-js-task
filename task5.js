// Part 1: Array Manipulation Methods

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
fruits.push("Kiwi", "Pineapple", "Papaya");
console.log(fruits); // ["Apple", "Mango", "Orange", "Banana", "Grapes", "Kiwi", "Pineapple", "Papaya"]

let numbers = [10, 20, 30, 40, 50, 60];
numbers.pop();
console.log(numbers); // [10, 20, 30, 40, 50]

let names = ["Deepak", "Priya", "Arun", "Kavin", "Divya"];
names.shift();
console.log(names); // ["Priya", "Arun", "Kavin", "Divya"]

let arr = [10, 20, 30, 40];
arr.unshift(5, 15);
console.log(arr); // [5, 15, 10, 20, 30, 40]

let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2);
console.log(arr); // [10, 40, 50]

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 100);
console.log(arr); // [1, 2, 100, 4, 5]

let arr = [1, 2, 3, 4, 5];
arr.fill("hello", 2, 4);
console.log(arr); // [1, 2, "hello", "hello", 5]

// Part 2: Array Merge and Search Methods

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
console.log(arr1.concat(arr2)); // [10, 20, 30, 40, 50, 60]

let arr = [10, 20, 30, 40, 50, 60];
console.log(arr.slice(1, 4)); // [20, 30, 40]

let nested = [1, [2, [3, 4]], [5, 6]];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

let arr = [10, 20, 30, 40, 50];
console.log(arr.includes(30)); // true

let arr = [5, 10, 15, 20, 25];
console.log(arr.indexOf(20)); // 3

let arr = [1, 2, 3, 2, 1, 2];
console.log(arr.lastIndexOf(2)); // 5

let numbers = [50, 10, 40, 20, 30];
numbers.sort((a, b) => a - b);
console.log(numbers); // [10, 20, 30, 40, 50]

let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers); // [7, 6, 5, 4, 3, 2, 1]

// Part 3: Spread and Rest Operators

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8]

let student = { name: "Deepak", age: 21 };
let job = { role: "Java Developer", company: "Stackly" };
let details = { ...student, ...job };
console.log(details); // {name: "Deepak", age: 21, role: "Java Developer", company: "Stackly"}

function display(a, b, ...rest) {
    console.log(a, b, rest);
}
display(10, 20, 30, 40, 50); // 10 20 [30, 40, 50]

function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1]);
}
one(10, 20, 30, 40); // 100

let arr = [1, 2, 3, 4];
let copy = [...arr];
console.log(copy); // [1, 2, 3, 4]

// Part 4: Array Destructuring

let arr = [10, 20, 30, 40];
let [a, b, c, d] = arr;
console.log(a, b, c, d); // 10 20 30 40

let nested = [1, 2, [3, 4, [5, 6]]];
let [a, b, [c, d, [e, f]]] = nested;
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

let student = ["Deepak", 21, 8.5];
let [name, age, cgpa] = student;
console.log(name, age, cgpa); // Deepak 21 8.5

// Part 5: Object Destructuring

let person = { name: "Deepak", role: "Developer", location: "Chennai" };
let { name, role, location } = person;
console.log(name, role, location); // Deepak Developer Chennai

let student = {
    name: "Priya",
    address: { city: "Chennai", state: "Tamil Nadu" }
};
let { address: { city, state } } = student;
console.log(city, state); // Chennai Tamil Nadu

let employee = {
    name: "Deepak",
    role: "Developer",
    location: { mainLocation: "Chennai", currentLocation: "Ambattur" }
};
let { name, role, location: { mainLocation, currentLocation } } = employee;
console.log(name, role, mainLocation, currentLocation); // Deepak Developer Chennai Ambattur

// Part 6: Mixed Practical Challenges

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.shift();
numbers.pop();
numbers.unshift(20, 30);
console.log(numbers); // [20, 30, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [10, 20, 30, 20, 40, 20, 50];
console.log(arr.includes(20)); // true
console.log(arr.indexOf(20)); // 1
console.log(arr.lastIndexOf(20)); // 5

let employee1 = { name: "Deepak", age: 21 };
let employee2 = { role: "Java Developer", company: "Stackly" };
let employee = { ...employee1, ...employee2 };
let { name, role } = employee;
console.log(name, role); // Deepak Java Developer

let nested = [1, [2, 3], [4, [5, 6]]];
let result = nested.flat(Infinity);
result.reverse();
console.log(result); // [6, 5, 4, 3, 2, 1]