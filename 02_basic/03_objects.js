//singleton
// Object.create


//  object literals


const mySym = Symbol("Key1")  //Yaha par Symbol declare hua hai 

const Jsuser = {             // object ko declared kiye hai  {Key: Value} mei initialize karte hai object ko
    name :"Shiva",           
    age: 21,                
    [mySym] : "myKey1", //symbol ko define karne ka tarika in object 
    location: "Delhi",
    email:"abc21@gmail.com",
    isLoggedIn: false
}

// console.log(Jsuser.name)
// console.log(Jsuser["name"])  yeh reccomended hai jyada yahi use karna hai
console.log(Jsuser[mySym]);     

Jsuser.email= "shiv12@gmail.com"
// console.log(Jsuser["email"]);  

// Object.freeze(Jsuser)

Jsuser.name="Abc"
console.log(Jsuser);

Jsuser.greeting = function(){           // Functions
    console.log("Hello JS user");
}

Jsuser.greetingtwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())

