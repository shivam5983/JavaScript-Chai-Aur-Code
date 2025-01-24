const userEmail= []

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
    
}

// Falsy values
// false , 0, -0, BigInt (0n) ,"" , null, undefined, Nan

// truthy Value

// "0" , "False" , " ", [],{}, function(){} 

// if(userEmail.length === 0){
//     console.log("Array is empty");
    

// }


const emptyobj ={}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is Empty");
    
}


// False == 0    "TRUE"
// false ==''     "TRUE"
// 0 ==''     "True"


// Nullish Coalescing Operator(??) : null undefined

let val1;
val1= 5 ?? 10   // 5
val2= null ?? 10   //10 

val3 = undefined ?? 15   //undefined
console.log(val2);
console.log(val3);


// Terniary Operator

// condition ? true:false

const iceTeaPrice =100
iceTeaPrice>70 ? console.log("more than 70 ") : console.log("less than 70");

