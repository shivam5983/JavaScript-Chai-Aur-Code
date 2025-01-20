const name="Shivam"
const repocount= 44;

console.log(name+repocount+" Value");   
//output Shivam44 Value


console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

// to declare string
const gameName= new String("Shiv-am-smile")
//  Or const gameName="Shivam"

console.log(gameName[1])
console.log(gameName.__proto__);





console.log(gameName.length);  //output: 8 
console.log(gameName.toUpperCase()); 
// yeh Original String ko change nhi kiya kyoki yeh stack memory mei ja rahe hai 

console.log(gameName.charAt(4)); 
console.log(gameName.indexOf('a')); 

const newString = gameName.substring(0,4) 
console.log(newString) // output shiv

const anotherString= gameName.slice(-5,11)
console.log(anotherString);


const newStringOne= "   Hitesh    "
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

// url.includes('shivam')  output false

console.log(gameName.split('-'))



const str="Hello"

console.log(str.repeat(3)); // Outputs: "HelloHelloHello"
console.log(str.endsWith("lo")); // Outputs: true
console.log(str.startsWith("He")); // Outputs: true
console.log(str.replace("Hello", "Hi")); // Outputs: "Hi"



