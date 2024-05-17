const accountId = 1
let accountEmail = "xyz@gmail.com"
var accountPassword = "123456"
accountCity = "indore"

// accouuntId = 2 not allowed
/*
var, let, const, log 
prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);

accountEmail = "xyz@gmail.com"
accountPassword = "123456"
accountCity = "indore"

console.table([accountEmail, accountPassword, accountCity])