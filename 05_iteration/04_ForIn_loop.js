const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swipt by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming =["js","cpp","java","ruby","py"]

for(const key in programming){
    console.log(programming[key]);
}