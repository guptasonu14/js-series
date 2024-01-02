//Object literal

const user = {
    username: "gupta",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){

       // console.log("Got user details from database");
      // console.log(`username: ${this.username}`);
      // console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

/****************** */
// -  Constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username }`);
    }

    return this;
}

const userOne = new User("gupta",5,true)
const userTwo = new User("Chai",8,false)
console.log(userOne);
console.log(userTwo);