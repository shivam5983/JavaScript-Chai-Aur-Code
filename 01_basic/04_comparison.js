console.log(2>3);

console.log("2">1);
console.log(null== 0);
console.log(null>= 0);

// The reason is that an equality check == and comparisons > < >= <= work
// differently.
// Comparisons convert null to a number, traeting it as 0. 
// that's why(3) num>=0 is true and null>0 is false.. 


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
 
