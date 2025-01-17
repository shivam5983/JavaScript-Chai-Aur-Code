const accountId= 12234
let accountEmail= "abc12@gmail.com"
var accountPassword="1234"
accountCity="Delhi"
let accountState;

// accountId=12   not allowed 

console.log(accountId);


/*
Prefer not to use var beacause of issue in block scope and functional scope

*/

accountEmail= "abcdd12@gmail.com"
accountPassword="12344543"
accountCity="Noida"

console.table([accountEmail,accountPassword,accountCity,accountState])


