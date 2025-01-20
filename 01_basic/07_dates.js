//Dates

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


console.log(typeof(myDate))  //object

let myCreatedDate = new Date(2023, 0,23)  //Jan 23 2023
// Month js mei 0 se start hote hai....
console.log(myCreatedDate.toDateString());
