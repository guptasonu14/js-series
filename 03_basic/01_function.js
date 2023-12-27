function sayMyName(){
    console.log("s");
    console.log("o");
    console.log("n");
    console.log("u");

}
//sayMyName()

// function addTwoNumber(number1,number2){
//      console.log(number1+number2);
// }
//addTwoNumber(3,4)
function addTwoNumber(number1,number2){
    // let result = number1+number2
    // return result;
    return number1+number2
}
const result = addTwoNumber(3,4)
console.log("Result:",result);


function loginUserMessage(username="sam"){
    if(!username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("sonu"))
//console.log(loginUserMessage("sonu"));

function clculateCartPrice(...num1){
    return num1

}
//console.log(clculateCartPrice(200,300,400));

const user = {
    username:"sonu",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price:99
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));