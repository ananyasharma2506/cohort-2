// Linking JavaScript Files
console.log("Connected!")

//Running JS in Browser Console
// 1.
console.log(2+2);
// 4
// 2.
alert("Hii")
// 3.
prompt("Your name?")
// 4.
// let city = "Bhopal"
// console.log(city);

// Variables and Keywords
// 1.
var a = "Ananya";
console.log(a);
// Ananya

let b = "Ananya";
console.log(b);
// Ananya

const c = "Ananya";
console.log(c);
// Ananya

// 2.
a = "Updated";
console.log(a);
// Updated

b = "Updated";
console.log(b);
// Updated

// c = "Updated";
// console.log(c);
// Uncaught TypeError: Assignment to constant variable.

// 3.
// {
//     let v = "Hello";
// }
// console.log(v);
// script.js:45 Uncaught ReferenceError: v is not defined

// 5.
console.log("const can be used for declaring constant values like a discount,days in a year,planck's constant,value of pi,etc")

// Logging and Interaction
// 1.
// let username = "Ananya";
// let age = 20;
// let cityy = 'Gondia';
// console.log(username);
// console.log(age);
// console.log(cityy);
// console.info(username);
// console.info(age);
// console.info(cityy);
// console.warn(username);
// console.warn(age);
// console.warn(cityy);
// console.error(username);
// console.error(age);
// console.error(cityy);

// 2.
let n = prompt("Enter your name");
alert(`Welcome , ${n}!!`);

// 3.
console.log(typeof n);
// string

// 4.
let age = prompt("Enter age:");
console.log(age);
console.log(age+5);
// 20
// 205

// Working with Strings
// 1.
let msg = "I love Sheryians";

// 2.msg.slice(2,6)
// 'love'

// 3.msg.split("")
// (16) ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'S', 'h', 'e', 'r', 'y', 'i', 'a', 'n', 's']

// 4.msg.replace("love","study at")
// 'I study at Sheryians'

// 5.
let name = "Harsh";
console.log(`Hey ${name}, welcome to Js!`);
// Hey Harsh, welcome to Js!

// 6.msg.includes("love")
// true

// Statements and Semicolons
// 1.Yes the code still runs
// 2.No it doesn't break
// 3.
console.log("hello")
console.log("how are you")
console.log("doing nice")
// hello
// how are you
// doing nice

// Comments
// 1.
// Ananya Sharma

// 2.
// My code performs 
// the following tasks given to it 
// and prints the output


// Expressions vs Statements
// 3.Expression gives value immediately

// 4.
// let y = (5+10)*2;
// console.log(y);

// 5.Expression gives us a value but statement does not give a 
// value instead it performs some tasks


// Data types
// 1. , 2.
let agee = 25;
console.log(typeof agee);
// number

let namee = "Harsh";
console.log(typeof namee);
// string

let isStudent = true;
console.log(typeof isStudent);
// boolean

let skills = ["JS","HTML"];
console.log(typeof skills);
// object

let user = {city:"Bhopal"};
console.log(typeof user);
// object

let x = null;
console.log(typeof x);
// object

let y;
console.log(typeof y);
// undefined

let z = Symbol("id");
console.log(typeof z);
// symbol

// 4.
// 12 + "hello"
// '12hello'
// Anything added to a string is concatenated with that string

// Special values
// 1. , 2. 
// 1/0
// Infinity
// 0/0
// NaN
// Number("abc")
// NaN
// undefined+1
// NaN

// 3.null hum tab use karte hai jab hum jaan buchke variable ko value nh dena chahte and
//  undefined tab hota hai jab variable ko value assign nahi ki gayi ho


// Primitive vs Reference
// 1.
let w = 5;
let u = w;
u=10;
console.log(w,u);
// 5 10

// 2.
let obj1 = {name:"Harsh"};
let obj2 =obj1;
obj2.name = "Sheryians";
console.log(obj1.name);
// Sheryians

// 3.The values of obj1 and obj2 changes together

