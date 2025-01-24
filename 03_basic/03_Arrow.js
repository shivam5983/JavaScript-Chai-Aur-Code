const test = {
    name: "Shiv",
     age: 23,
       fun: function () {
         console.log(this.age);
         console.log(this)
    },
  };
  // console.log(test.name);
  
  // test.fun()  // 23
//   test.age= 77
//   test.fun()   //77


//   IMPORTANT NOTE :- Browser ke andar jo GLobal object hai woh hai window object


// function smile(){
//     let username = "Shivva"
//     console.log(this);
    
// }

// smile()





// const addTwo= (num1,num2) => {    // curly braces use kiya to return keyword use karna hi hai
//     return num1+num2
// }


// function chai(){     
//   let username = "hitesh"
//   console.log(this.username);   //this context keval object mei hi kaam karta hai 
// }

// chai()


// Function declared by arrow function

// const chai = () => {
//   let username= "hitesh"
//   console.log(this);
  
// }

// chai()


// const addTwo = (n1,n2) => {
//   return n1+n2
// }

// console.log(addTwo(3,4))

const addTwo = (n1,n2) => n1+n2       // implicit return 
console.log(addTwo(3,4)) 


const addThree = (n1,n2,n3) => (n1+n2)       // implicit return 
console.log(addTwo(3,4,5)) 

// curly braces use karenge to return keyword use karna hoga aur parenthesis use karenge to nhi karna hoga


const add = (n1,n2) => ({userbname: "Shiv"})       // implicit return 

