// 1. var — 10 Questions

var name = "deepak"
console.log(name);  //deepak

var age = 25
age = 30
console.log(age); //30

var city = "chennai"
city = "bangalore"
console.log(city); //bangalore

var salary = 25000
var salary = 35000
console.log(salary); //35000

var vehicle = "Bike"
vehicle = "Car"
var vehicle = "Bus"
console.log(vehicle);//Bus

var department ="ECE"
var department = "CSE"
console.log(department); //CSE

var mark = 50
mark = 75
console.log(mark); //75

var company = "cognizant"
var company = "stackly"
console.log(company); //stackly

var abcd
abcd = "efgh"
console.log(abcd); //efgh

var food = "eggrice"
food = "curdrice"
food = "parotta"
food = "chickenrice"
console.log(food); //chickenrice

//-------------------------------------------------------------

// 2.let - 10 questions

let age = 22
console.log(age); //22

let sal = 30000
sal = 40000
console.log(sal); //40000

let name = "Deepak"
name = "kira"
console.log(name); //kira

let department = "ECE"
department = "CSE"
console.log(department);  //CSE

let mark = 60
mark = 90
console.log(mark); //90

let day 
day = "sunday"
console.log(day); //sunday

// let company = "cognizant"
// let company = "stackly"
// console.log(company);  //SyntaxError: Identifier 'company' has already been declared

let city = "chennai"
city = "bangalore"
city = "delhi"
console.log(city); //delhi

let drink = "lychee juice"
let fruit = "pineapple"
let icecream = "Blackcurrent"
console.log(drink + "\n" + fruit + "\n" + icecream); //lychee juice //pineapple //Blackcurrent

// let beach = "marina"
// beach ="beasant "
// let beach = "kovalam"
// console.log(beach);   //SyntaxError: Identifier 'beach' has already been declared  

//-------------------------------------------------------------

// 3. const — 8 Questions

const age = 25
console.log(age); //25

const salary = 50000
console.log(salary); //50000

const company = "stackly"
console.log(company); //stackly

// const mobile = "samsung"
// mobile = "oneplus"
// console.log(mobile);  //TypeError: Assignment to constant variable.

// const gadget = "laptop"
// const gadget = "mobile"
// console.log(gadget);  //SyntaxError: Identifier 'gadget' has already been declared

const college = "Anna University college of engineering"

const name = "Deepak"
const age1 = 22
const department = "CSE"
console.log(name, age1, department); //Deepak 22 CSE

var tv = "sony"
let mobile1 = "oneplus"
const laptop = "Acer"
console.log(tv, mobile1, laptop); //sony oneplus Acer

//-------------------------------------------------------------


// 4. Printing Statements — 7 Questions

console.log("Im Deepak"); //Im Deepak

var age = 22
console.log("My age is " + age); //My age is 22

console.log(100); //100

var name = "Deepak"
var age = 22
var city = "Chennai"
console.log(name); //Deepak
console.log(age); //22
console.log(city); //Chennai

var message = "Hello JavaScript"
console.log(message); //Hello JavaScript

var color = "Red"
console.log(color); //Red
color = "Blue"
console.log(color); //Blue

console.log("Deepak"); //Deepak     
console.log(21); //21
console.log("BE Computer Science"); //BE Computer Science

//-------------------------------------------------------------

// 5. alert() — 5 Questions

alert("Welcome to javaScript"); 

var username = "kira"
alert("hi " + username); 

var userage = 22 
alert("age is " + userage);

var message = "welcome naveen"
alert(message);

var Qualification = "BE Computer Science and Engineering"
alert("My Qualification is " + Qualification);

//-------------------------------------------------------------

// 6. prompt() — 5 Questions

var name = prompt("what is your name ?")
console.log(name)

var age = prompt("how old are you ?")
alert(age)

var userqualification = prompt("what is your qualification ?")
console.log(userqualification)

var name1 = prompt("what is your name ?")
alert(name1)

var age2 = prompt("how old are you ?")
console.log(age2)

//-------------------------------------------------------------

// 7. confirm() & document.writeln() — 3 Questions

confirm("Do you know programming ?");

var message = "welcome to batch 41"
document.writeln(message);

confirm("do you want to continue ?");

//-------------------------------------------------------------

// 8. Console Methods — 2 Questions

console.log("normal message");
console.warn("warning message");
console.error("error message");


console.log("This is a normal message");  //displays a normal message in console
console.warn("This is a warning message"); //displays a message with a warning icon
console.error("This is an error message"); //displays a message with an error icon
console.clear();  //the previous console messages disappear from the console.
