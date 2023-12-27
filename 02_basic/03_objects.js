//singleton

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Sonu",
    "full name" : "Sonu gupta",
    [mySym] : "mykey1",//sysmbol ko bracket me hi likh sakte hai
    age: 18,
    location: "Jaipur",
    email: "sonu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}
console.log(jsUser.email);
//console.log(jsUser.full name); //getting error so use below method to access
console.log(jsUser["full name"])
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

//if we want to change value ...
jsUser.email = "gupta@google.com";
//Object.freeze(jsUser); //agr freeze kroge to iske uper wala hi email sirf change hoga

jsUser.email = "sonu@microsoft.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
