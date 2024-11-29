var userID = 6286
let userEmail = "Harshit@gmail.com"
const userPassword = "Harshit777"
userCity = "Mumbai"
let userState;

//userPassword = "harshit0" //Changing variable created useing Const is not allowed

userID = 452
userEmail = "h@me.com"
userCity = "NYC"

/*
prefer not to use Var
due to issue in block scope and functional scope
*/

console.log(userEmail);

console.table([userID, userEmail, userPassword, userCity, userState])

console.log(userState);

