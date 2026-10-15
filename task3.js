// Part 1: Variables and Data Types (5 Questions)

var a = 10;
a = 20;
var a = 30;
console.log(a); // 30
let b = 40;
b = 50;
console.log(b); // 50
const c = 60;
console.log(c); // 60

let name = "Deepak";
let age = 21;
let programmingKnowledge = "JavaScript";
console.log(name, typeof name); // Deepak string
console.log(age, typeof age); // 21 number
console.log(programmingKnowledge, typeof programmingKnowledge); // JavaScript string

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
console.log(fruits); // ["Apple", "Mango", "Orange", "Banana", "Grapes"]
console.log(fruits[0]); // Apple
console.log(fruits[fruits.length - 1]); // Grapes

let student = { name: "Deepak", role: "Java Full Stack Developer", cgpa: 8.5 };
console.log(student.name); // Deepak
console.log(student.role); // Java Full Stack Developer
console.log(student.cgpa); // 8.5

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
alert("Hello, " + userName);
console.log(userAge);

// Part 2: Operators (7 Questions)

let num1 = 15;
let num2 = 4;
console.log(num1 + num2); // 19
console.log(num1 - num2); // 11
console.log(num1 * num2); // 60
console.log(num1 / num2); // 3.75
console.log(num1 % num2); // 3
console.log(num1 ** num2); // 50625

let a = 5;
console.log(a++); // 5
console.log(a); // 6
console.log(++a); // 7

let a = 10;
let b = a--;
let c = --a;
console.log(a); // 8
console.log(b); // 10
console.log(c); // 8

let num = 20;
num += 5;
console.log(num); // 25
num -= 3;
console.log(num); // 22
num *= 2;
console.log(num); // 44
num /= 4;
console.log(num); // 11
num %= 5;
console.log(num); // 1

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

let age = 21;
let hasID = true;
console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID); // true
console.log(!hasID); // false

let userAge = 20;
console.log(userAge >= 18 ? "Eligible" : "Not eligible"); // Eligible

// Part 3: Type Casting and Conditions (6 Questions)

console.log(typeof ("hello" + 10)); // string
console.log(typeof (10 + true)); // number
console.log(typeof (10 + null)); // number
console.log(typeof ("hello" + undefined)); // string

let input = Number(prompt("Enter a number:"));
console.log(input + 10); // If input is 20, output is 30

console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(true)); // true

let number = 10;
if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Zero or negative number");
}

let time = Number(prompt("Enter the hour (0-23):"));
if (time < 0 || time > 23) {
    console.log("Invalid time");
} else if (time < 5) {
    console.log("Night");
} else if (time < 8) {
    console.log("Early morning");
} else if (time < 12) {
    console.log("Morning");
} else if (time < 17) {
    console.log("Afternoon");
} else if (time < 20) {
    console.log("Evening");
} else {
    console.log("Night");
}

let age = 21;
let height = 170;
let weight = 60;
if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Eligible");
        } else {
            console.log("Weight requirement not met");
        }
    } else {
        console.log("Height requirement not met");
    }
} else {
    console.log("Age requirement not met");
}

// Part 4: Switch and Loops (8 Questions)

let color = "red";
switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);

for (let char of "JavaScript") {
    console.log(char);
}

let students = ["Priya", "Deepak", "Arun", "Kavin", "Divya"];
for (let student of students) {
    console.log(student);
}

let student = { name: "Priya", role: "Frontend Developer", cgpa: 9 };
for (let key in student) {
    console.log(key, student[key]);
}

// Part 5: Mixed Practice (4 Questions)

let first = Number(prompt("Enter the first number:"));
let second = Number(prompt("Enter the second number:"));
console.log("Sum:", first + second);
console.log("Difference:", first - second);
console.log("Product:", first * second);
console.log("Remainder:", first % second);

let numbers = [5, 12, 8, 20, 15];
for (let number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

let operation = prompt("Choose: addition, subtraction, multiplication, division");
let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
switch (operation.toLowerCase()) {
    case "addition":
        alert("Result: " + (firstNumber + secondNumber));
        break;
    case "subtraction":
        alert("Result: " + (firstNumber - secondNumber));
        break;
    case "multiplication":
        alert("Result: " + (firstNumber * secondNumber));
        break;
    case "division":
        if (secondNumber !== 0) {
            alert("Result: " + (firstNumber / secondNumber));
        } else {
            alert("Cannot divide by zero.");
        }
        break;
    default:
        alert("Invalid operation.");
}