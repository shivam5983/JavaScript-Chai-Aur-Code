// function sayMyName(){
//     console.log("S");
//     console.log("h");
//     console.log("i");
//     console.log("v");    
// }

// sayMyName() 

// function addTwo(num1, num2){
//     console.log(num1+num2)
// }
// const result= addTwo(2,3)
 
function addTwo(num1, num2){

    let result = num1+ num2
    return result
}

const res= addTwo(2,3)
// console.log("result : ",res);


function loginUserMesssage(username ="sam"){   //default value sam hoga agar kuch argument mei pass na kiya jaye to....

    if(username === undefined){
            console.log("Please enter a username");
            return
            
    }
    return `${username} just logged in`
}

const message= loginUserMesssage()
// console.log(message);
//agar argument mei kuch paas nhi kiya jaye to woh undefined hota hai  {undefined just logged in}

   

function calculateCartPrice(...num1){   //... ko spread operator aur rest operator bolte hai
    return num1
}

    
// console.log(calculateCartPrice(200,400,555,890));

const user = {
    userName:"Shivam",
    price: "2899"
}

function object(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
object(user)
object({       //function mei object ko pass kar rahe hai
    userName : "sam",
    price: 399

})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

