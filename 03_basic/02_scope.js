// var c = 300;
let a=100;
if(true){
    let a = 10;
    const b= 20;
   console.log("INEER: ",a);
}
console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "gupta"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); //it will throw error because it is out of scope
    two()
}
one()

if(true){
    const username = "sonu"
    if(username === "sonu"){
        const website = "youtune"
        console.log(username+website);
        
    }
  //  console.log(website); //error
}
//console.log(username) // throw error


//+++++++++++++++ interesting ++++++++++

function addone(num){
 return num+1
}
console.log(addone(5))


const addTwo = function(num){
    return num+2
}
addTwo(5)