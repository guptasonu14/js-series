const coding =["js","cpp","java","ruby","py"]

// coding.forEach(function (item) {
//     console.log(item);
// } )


// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//    console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
