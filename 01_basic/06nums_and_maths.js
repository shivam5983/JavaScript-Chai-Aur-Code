const score= 400
const balance= new Number(100)
// console.log(balance);  // [Number: 100]

// console.log(balance.toString);
// console.log(balance.toFixed(2)); //100.00


// const otherNumber= 123.85345

// console.log(otherNumber.toPrecision(3));

// const hundreds=1000000000
// console.log(hundreds.toLocaleString('en-In'));  //1,00,00,00,000

// ***********************Maths***********************************

// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3));  //4
// console.log(Math.ceil(4.4));// 5 top value
// console.log(Math.floor(4.9));   // 4 
// console.log(Math.sqrt(25));   //5

console.log(Math.random());  //value lies b/w 0 and 1 default
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);



const min= 10
const max= 20

console.log(Math.floor(Math.random() * (max-min+1))+ min) 

