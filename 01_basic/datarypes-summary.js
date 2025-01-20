// primitive data Types  Call by value 

// 7 types: String , Number, Boolean , Null , undefined, Symbol, BigInt


// javascript is a dynamically type

// Reference type (Non Primitive)

// array , Objects , Functions

// Array ka typeof "Function" aayega
// objects ka typeof "Function" aayega
// FUnctions ka typeof "Object function" aayega
// Null ka typeof "Object" aayega


const id= Symbol('123')
const anotherId =Symbol('123')

// console.log(id===anotherId);   //false


const bigNumber= 324564645565465465464n

const heros = ["Shaktiman","Doga","nagraj"]

let myObj={
    name: "Hitesh",
    age:22,
}

console.log(typeof(myobj));


// const myFunc= function(){
//     console.log("Heelo World")

// }



// ***********************************************************

// Stack(Primitive), 
// 
// heap memory(Non-Primitive) 
// heap ke andar same reference milta hai isme value change nhi hote hai
// Stack ke andar jayenge to copy milta hai aur oroginal value to same rehta hai


let myYoutubeName = "Shivammm"



