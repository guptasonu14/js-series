//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123asd"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false
//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: {
            userfullname: {
                firstname: "sonu",
                lastname: "gupta"
            }
        }
    }
}

//console.log(regularUser.fullname.firstname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj4 = {5: "a",6:"b"}

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3);


const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {

    },
    {

    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*****++++++++++++++++++++++++++++++++++++ */
//Object deStructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sonu"
}

const {courseInstructor:Instructor} =course
//console.log(courseInstructor);
console.log(Instructor);


// {
//     "name": "sonu",
//     "coursename": "js in hindi",
//     "price": "999",
// }
 
[
    {},
    {},
    {} 

]