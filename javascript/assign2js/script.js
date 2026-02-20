// Basic operators
// 1.
let a =10;
let b =3 ;
console.log(a+b);
// 13
console.log(a-b);
// 7
console.log(a*b);
// 30
console.log(a/b);
// 3.3333333333333335
console.log(a%b);
// 1
console.log(a**b);
// 1000

// 2.
let x = 5;
// x = x + 3;
x += 3;
console.log(x);
// 8
// x-=3
// 5
// x*=3    
// 15
// x/=3
// 5

// 3.
// let count =5;
// console.log(count);
// count++;
// console.log(count);
// 5
// 6
let count =5;
console.log(count);
count--;
console.log(count);
// 5
// 4

// 4.
// 5 == "5"
// true
// 5 ==="5"
// false
// == is not a strict comparison operator but === is a strict operator
// and does not gives the value of a number equal to string it checks both the type and the number.

// 5.
let t=10;
if (t>5 && t<20 && t===10){
    console.log("x is 10");
}
else{
    console.log("x is not 10");
}
// x is 10

// 6.
// true && false
// false
// true || false
// true
// !(true)
// false

// 7.
// (5>3 && 10>8)
// true
// (5>3 || 10<8)
// true


// Variable hoisting in JavaScript
// 1.
console.log(s);
var s =10;
// undefined

// 2.
// console.log(c);
// let c =10;
// ReferenceError: Cannot access 'c' before initialization
    
// 3.
test()
function test(){console.log("Hello")}
// Hello

// 4.
// hello()
// var hello = function(){
//     console.log("Hii");
// }
// TypeError: hello is not a function

// variable hoist hota h so isme error aayega kyuki jab hum hello() ko call kar rahe hai
// usme function assign hi nh kiya gaya h tab
// var hello;
// hello()
// hello = function();
// technically vo coade aisa h

// 5.
// 1.var variables and function declarations hoist hote hai
// 2.toh aisa bol sakte h ki var and const variables fully
//  hoist nh hote hai because voh tdz me hote hai and
//  before initialization hum unhe access nh kar sakte


// Conditional Operators
// 1.
// let age = prompt("Enter age :");
// if(age>=18){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

// 2.
let marks = prompt("Enter marks");
if(marks>=90){
    console.log("A grade");
}
else if(marks>=75){
    console.log("B grade");
}
else if(marks>=50){
    console.log("C grade");
}
else{
    console.log("Fail");
}

// 3.
let city = "Jaipur";
if(city==="Bhopal"){
    console.log("MP");
}
else if(city==="Delhi"){
    console.log("Capital");
}
else{
    console.log("Unknown City");
}

// 4.
let score = 40;
score > 35 ? console.log("Pass") : console.log("Fail");

// 5.
let temperature = 45;
temperature > 30 ? console.log("Hot") : console.log("Pleasant");

// 6.
let day = 6;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;        
    default:
        console.log("Invalid Day");
}

// 7.
let age = 15;
let country ="India";
if(age>18 && country=="India"){
     console.log("Eligible for vote");
}
else{
    console.log("Not Eligible");
}