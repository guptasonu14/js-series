//for of
//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for(const num of arr){
  //  console.log(num);
}

const greetings ="Hello world!";

for(const greet of greetings){
    //console.log(greet);
}

//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys.Any value(both primitives) values may be used as either a key or value)


const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"Franch")
//console.log(map);

for(const [key,value] of map){
   // console.log(key,':-' ,value);
}

const myObect = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const[key,value] of myObect){
//    console.log(key,':-' ,value);
// }

const map1 = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"Fran")


for(const key in map1){
    console.log(key); // no output
}