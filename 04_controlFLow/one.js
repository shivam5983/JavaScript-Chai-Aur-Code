// if Statement

// const isUserLogged = True
// const temperature = 41

if( 2==="2"){
    console.log("Executed");
}
 else{
    console.log("Not executed")
 }

// "===" isme data type bhi check karta hai


// <, >, <=, >=, == , != , ==== , !==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User Power : ${power}`);
    
// }

// console.log(`user poewer : ${power}`);   //power is not defined beacuse declared variable is out of the scope 


const bal = 4000
// if(bal>500) console.log("high salary");   //implicit 

if(bal<500){
    console.log("less than 500");
}
else if(bal<750){
    console.log("less than 750");
}
else if(bal<950){
    console.log("less than 950");
}
else{
    console.log("Executed");
    
}


const userLogin =true
const debitcard = true

if(userLogin && debitcard){
    console.log("Allow to buy course");
    
}
