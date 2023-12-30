//const coding =["js","cpp","java","ruby","py"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((nums)=>nums > 4)

// const newNums = myNums.filter((nums)=>
// { return nums > 4
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: "Book one", genre: 'Fiction', publish: 1981, edition: 1989 },
    { title: "Book two", genre: 'Mystery', publish: 1995, edition: 2002 },
    { title: "Book three", genre: 'Science Fiction', publish: 2008, edition: 2010 },
    { title: "Book four", genre: 'Fantasy', publish: 2012, edition: 2015 },
    { title: "Book five", genre: 'Historical Fiction', publish: 2003, edition: 2005 },
    { title: "Book six", genre: 'Thriller', publish: 2019, edition: 2021 },
    { title: "Book seven", genre: 'Romance', publish: 1998, edition: 2000 },
    { title: "Book eight", genre: 'Biography', publish: 1985, edition: 1987 },
    { title: "Book nine", genre: 'Non-Fiction', publish: 2010, edition: 2012 },
    { title: "Book ten", genre: 'Adventure', publish: 2001, edition: 2004 }
];

let userBooks = books.filter((bk)=>bk.genre === 'Romance')
 userBooks = books.filter((bk)=>{
    return bk.publish >=2000 && bk.genre==="Thriller"
})

console.log(userBooks);
