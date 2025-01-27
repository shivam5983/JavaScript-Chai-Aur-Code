// for of 

const arr= [1,2,34,5,44,556,123]

for(const i of arr){
        // console.log(i);
        
}

const greeting = "heelo Woeld!"

for(const greet of greeting ){
    // console.log(`Each char is ${greet}`);
    
}  

// MAPS

// Map objects hold key: value pairs unique value hi show karenge
const map = new Map()
map.set('In',"India")
map.set('US',"United States")
map.set('Fr',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key);
    
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }