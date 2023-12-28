//Immediately Invoked Function Expressions (IIFE)
//global scope k pollution se proble hoti hai kai baar ,to us global variable to hataen k liye IIFE ko use krte hai..

//named IIFE
(function chai(){
    
    console.log(`DB CONNECTED`);
})();

//named IIFE
((name)=>{

    console.log(`DB CONNECTED two ${name}` );
})('gupta');