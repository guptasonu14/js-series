//1. Primitive Datatypes

//7 types: String,Number,Boolean,null, undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoogedIn = false;
const outSideTemp = null;
let userEmail; //undefined
const id = Symbol('123');

const anotherId = Symbol('123');
console.log(id ===anotherId);

const bigNumber = 12345676543222222232n;


//Refrence (non Primitive)

//Array,Objects,Functions

const heros = ["Shaktiman","naagraaj","doga"];

let muObj=
{
    name: "sonu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outSideTemp);


//+++++++++++++++++++++++++++++++++++++++++++

//Stack , Heap memory
//Stack is used in primitive datatypes
//Heap is used in Non primitive datatypes


let myYoutubeName = "journey"
let anotherName = myYoutubeName;
anotherName = "chai aur code"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@googlr.com",
    upi: "use@upi"
}


let userTwo = userOne;

userTwo.email = "sonu@google.com";
console.log(userOne.email);
console.log(userTwo.email);