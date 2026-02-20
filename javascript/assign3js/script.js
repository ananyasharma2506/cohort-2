// 1.Print numbers from 1 to 10
// for (let i=1;i<=10;i++){
//     console.log(i);
// }

// 2.Print only even numbers from 1 to 20
// for(let i=1;i<=20;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// 3.Print numbers from 10 to 1
// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// 4.Print the word "Yes" 5 times
// for(let i=1;i<=5;i++){
//     console.log("Yes");
// }

// 5.Print whether numbers from 1 to 10 are even or odd
// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         console.log(`${i} is Even`);
//     }
//     else {
//         console.log(`${i} is Odd`);
//     }
// }

// 6.Ask user for a number and say if it's positive or negative
// let num=+prompt("Enter a number");
// if(num>=0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }

// 7.Ask user's age and check if eligible to vote or not
// let age = prompt("Enter your age :");
// if(age === null){
//     console.error("You cancelled it");
// }
// else{
//     if(age.trim()===""){
//         console.error("Please write something")
//     }
//     else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.error("Please enter a number");
//         }else{
//             if(age<0){
//                 console.error("Age is not valid");
//             }
//             else if(age>=18){
//                 console.log("Eligible to vote");
//             }
//             else{
//                 console.log("Not eligible to vote");
//             }

//         }
//     }
// }

// 8.Print multiplication table of 5
// for(let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// 9.Count how many numbers between 1 and 15 are greater than 8
// let count = 0;
// for(let i=1;i<15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count);

// 10.Ask user for password and print access status
// let pass = "harsh";
// let password = prompt("Enter password");
// if(password===null){
//     console.error("You cancelled it");
// }
// else{
//     if(pass===password){
//         console.log("Password matched");
//     }
//     else{
//         console.log("Password not matched");
//     }
// }

// 11.Allow only three attempts to enter correct password.
// let attempt = 0;
// let pass = "ananya";
// let password = prompt("Enter password");
// attempt++;

// while(attempt<3 && pass!==password){
//     password = prompt("Enter password");
//     attempt++;
// }
// if(attempt===3 && pass!==password){
//     console.error("Account locked");
// }
// else{
//     console.log("Account opened");
// }

// 12.Ask user for words until they type "stop".Count how many times they typed "yes".
// let words = prompt("Enter word");
// let count=0;

// while(words !== "stop"){
//     if(words === "yes") count++;
//     words = prompt("Enter word");
// }
// console.log(`Total number of times yes counted : ${count}`);

// 13.Print numbers divisible by 7 from 1 to 50
// for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }

// 14.Sum of all odd numbers from 1 to 30
// let sum = 0;
// for(let i=1;i<=30;i++){
//     if(i%2 ===1){
//         sum +=i;
//     }
// }
// console.log(sum);

// 15.Keep asking number until user enters an even number
// let num = prompt("Enter number");
// num = Number(num);
// while(num%2 !== 0){
//     num = prompt("Enter number");
//     num = Number(num);
// }
// console.log("Even number entered");

// 16.Print numbers between two user inputs
// let start = +prompt("Enter starting number");
// let end = +prompt("Enter ending number");
// if(start>end){
//     console.error("Starting number cannot be bigger than ending number");
// }
// for(let i=start+1;i<=end-1;i++){
//     console.log(i);
// }

// 17.Print only first 3 odd numbers from 1 to 20
// let count =0;
// for(let i = 1;i<=20;i++){
//     if(count === 3) break;
//     if(i%2 === 1){
//         console.log(i);
//         count++;
//     }
// }

// 18.Ask user 5 numbers. Count how many are positive
// let count=0;
// for(let i = 1;i<=5;i++){
//     let num = prompt("Enter number:");
//     num=Number(num);
//     if(num>=0) count++;
// }
// console.log(`${count} numbers are positive`);

// 19.ATM simulator - Allow 3 withdrawals. Start with 1000rs balance.Ask withdrawal amount 3 times. 
// If enough balance - deduct, else - print "Insufficient balance".
let balance =1000;
let flag = false;
let count = 0;
while(balance>0 && count!==3){
    let withdraw = +prompt("Enter amount you want to withdraw");
    count++;
    if(withdraw<=1000) balance-=withdraw;
    else{
        flag = true;
        break;
    }
}
if(flag === true){
    console.log("Insufficient balance");
}
console.log(`Balance : ${balance}`);
