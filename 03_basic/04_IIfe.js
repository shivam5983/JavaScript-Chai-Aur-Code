//Immediately Invoked Function Expression(IIFE)


//Global scope ke variables ko hatane ke liye yeh use kiya (iife)    

(function chai(){     // named IIFE
    console.log("DB Connected")

})();     // end karna hota hai semi colon se



( (name) => {      //unnamed IIFE
    console.log(`DB Connected Two ${name}`)
}) ("Sam")

// ****************VDO 25*********************
// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.
