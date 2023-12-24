const accountId = 144553;
let accountEmail = "sgupta@gmail.com";
var accountPassword = "12345";
accontCity = "Jaipur";
let accountState;

//accountId = 2; //not allowed can't change const variable
accountEmail  = "sg@email.com";
accountPassword = "54321";
accontCity = "Gaya"

console.log(accountId);

/**
 Prefer not to use "var" because of issue in block
 scope and functional scope
 */
console.table([accountId,accountEmail,accountPassword,accontCity,accountState]);