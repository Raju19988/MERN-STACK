// console.log("hello world");

// let city = "Bihar";
// city = "Darbhanga";
// console.log("city",city);


// const country = "India";
// country = "USA";
// console.log("country",country);
// let marks = 90; //Number
// let student = "Raju";
// let isPassed = true; //Boolean
// let x;    //Undefined
// let y = null; //Null
// console.log("marks,student,isPassed,x,y---->",marks,student,isPassed);

//Numbers

// let a = 10;
// let b = 3.5;

// let inf = Infinity;
// let notANumber = NaN;
// console.log(typeof notANumber);

// let age = "20";
// Number(age); //20
// parseInt("10.5"); //10

// console.log("age-->",typeof Number(age));
// console.log("parseInt-->",typeof parseInt("10.5"));

//Strings
// let firstName = "Raju";
// let course = 'JavaScript';

// firstName.length   //number of characters
// firstName.toUpperCase()
// firstName.includes("Raj")
// console.log(firstName.length);

// console.log(firstName.includes("java"));

// let first = "Raju";
// let last = "Kumar";

// let full = first + " " + last;
// console.log(full);

//Tempelate Litrals
// let firstname = "Raju";
// let age = 20;

// let msg = `My name is ${firstname} and my age is ${age}`;
//  console.log("message",msg);
//  let a = 10, b = 20;
//  let sum = `Sum is ${a + b}`

//  console.log("sum",sum);

//NAN
// let a = 10;
// let b = "abc";

// let result = a * b;//NaN
// console.log(typeof result);//"number"

// 5+5
// "5"+5
// "5"*5
// 25*"abc"

//Scope

// let a = 10;//Global
// if(true){
//     let b = 20;//Block
//     console.log(a);//accessible
// }
// console.log(b);//Error
// let b = 20;

//Var (old,function Scoped)
// if(true){
//     var x = 10;
//     var x = 20;
// }
// console.log(x); //(accessible outside Block)

//Hoisting

// console.log(a);//undefined
// var a = 10;
// var a;
// console.log(a);

//Loose (==) vs Strict (==) Equality
// 5 == "5" //true
// true == 1 //true
// null == undefined //true

// function fib(n){
//     if(n==1){
//         return 1;
//     }
//     if(n<=0){
//         return 0;
//     }
//     return fib(n-1)+fib(n-2);
// }
// console.log(fib(10));

//IIFE--->
// (function(){
//     console.log("I am running automatically");
// })();
// (function(name){
//     console.log("Hello" + name);

// })("Raju");

// (function(){

// })();
//OBJECT

// let user = {
//     name: "Raju",
//     age: 20,
//     isAdmin: true
// };
// console.log("USER",user);

// let user2 = new Object();
// user2.name = "Raju";
// user2.age = 20;

// console.log("USER",user2);
// console.log("user 2 name",user2.name);

// //bracket Notation
// console.log(user["name"]);

//Objects with Function And this Keyword

// let firstName = "Dumbeldore"
// let person = {
//     firstName:"Raju",
//     greet: function(){
//         return "Hello" + this.firstName;
//     }
// };

// console.log("grret",person.greet());

//Nested Objects
// let company = {
//     name:"Google",
//     location:{
//         city: "Bihar",
//         pincode: 560001,

//     }
// };
// console.log("location",company);
// for(key in company){
//     if(typeof company[key]=== 'object'){
//         for(let innerkey in company[key]){
//             console.log(innerkey, company[key][innerkey]);
//         }
//     }
//     else{
//         console.log(key,company[key]);
//     }
// }
// console.log("company",company);

// let user = {
//     name:"Raju",
//     age: 25,
//     isAdmin: true
// };
// for(let key in user){
//     console.log("key :",key,"value:",user[key]);
// }
// function printObject(company){
//     for(key in company){
//         if(typeof company[key]==='object'){
//             console.log("object",company[key]);
//             printObject(company[key]);
//         }
//         else{
//             console.log(key,company[key]);
//         }
//     }
// }
// printObject(company);
    
//ARRAYS
// let arr = ["A","B","C"];
// let a1 = [1,2,3];
// let a2 = a1;
// a2.push(4);
// console.log(a1);

//copy methods
//by reference copy
// let b = a1;
// b.push(55);
// console.log(a1);

//spread-operator/shallow copy

// let c = [...a1];
// c.push(90);
// console.log(a1)

//Clone copy
// let d = structuredClone(a1);
// d.push(99);
// console.log(a1);