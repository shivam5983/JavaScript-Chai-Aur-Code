//arrays 

const myArr = [1,2,3,4,5] 
const myHeroes =["Shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)


// Array Methods 

myArr.push(7)
console.log(myArr);
myArr.pop()  //remove last element of array

myArr.unshift(9)
console.log(myArr)  //starting mei hi add karega array mei "9 " ko  

myArr.shift()
console.log(myArr);  // remove kar dega element ko jo starting mei unshift ke through add kiya tha jo


console.log(myArr.includes(9)) //False
console.log(myArr.indexOf(9))   //-1


const newArr = myArr.join()   // Array ko String mei convert karega

console.log(myArr);
console.log(newArr);


// Slice , splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //splice original array ko manipulate karta hai
console.log("C ", myArr);
console.log(myn2);


