"use strict"; // trat all JS code as newer version

// alert(3 + 3) we are using node js , not browser

console.log(3 + 3);

console.log("Gopal"); // code readability is high 

// two type documentation tc39 or mdn
let name = "gopal"
let age = 18
let isLoggedIn = false
let state
// number => 2 to power 53
// bigint
// string = "gopal"
// Boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object => null is object in java script

console.log(typeof "age");

// Primitive ------

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol,BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// consol.log(id == anotherId);

// const bigNumber = 4484784878748


// Reference (Non Primitive)----

// Array, Objects, Functions

// const heros = ["shaktiman", "Nagraj", "doga"];

// let myObj = {
// name: "hitesh",
// age: 22,
// }
// const myFunction = function(){
// console.log("Hello world");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) : Any value places inside the stack gets a copy refrence.  

// Heap(Non-Primitive) : Any value placed inside the heap gets a reference.

let myYoutubename = "gopalkarma.com"

let anothername = myYoutubename
anothername = "vishwakarma"

console.log(anothername);
console.log(anothername);

let userOne = {
	email: "user@google.com",
	upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google"

console.log(userOne.email);
console.log(userTwo.email);