const arr= ["thor","Ironman","spiderman"]
const heroes= ["superman","flash","batman"]

// arr.push(heroes)
// console.log(arr)

// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// console.log(arr[3][1])  //output "flash" 

// const allheroes= arr.concat(heroes)   //concat return karta j=ek new array 
// console.log(allheroes);


const all_new_hroes = [...arr,...heroes] //spread 
// console.log(all_new_hroes);

const anotherarr=[1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarr.flat(Infinity)
// console.log(real_another_array);
// sab array ko ek hi merge kar dega  



// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));  //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log({name :Shivam});   //output []


let score=100
let score2=200
let score3=300

console.log(Array.of(score, score2,score3));





