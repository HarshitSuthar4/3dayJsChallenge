// function syntaxOfFunction(Paramiter) {
//     console.log();
// } // Structue / syntax of a function basically function creation


// syntaxOfFunction(arguments); // this is how we call / execute a function

function devideTwoNumbers(number1, number2) {

    // console.log(number1 / number2);// the final vlaue will be undefined because we have not returned the value 
    // let result = number1 / number2
    // return result // now you can see the result value in the terminal and its not undefined

    return number1 / number2

}

// const result = devideTwoNumbers(10, 2)
// console.log("result:");

// function isLoggedIn (user){
//     return `Yes ${user} is logged in.`


// console.log(isLoggedIn())


function isLoggedIn(user) {
    if (!user) {
        console.log("Enter your username.");
        return
    }
    return `Yes ${user} is logged in.`
}
// console.log(isLoggedIn("HARSHIT"));


function totalCardPrice(...num1) {
    return num1
}
// console.log(totalCardPrice(100, 200, 300, 400, 800, 9800));


const gamingChair = {
    name: "Read Gear",
    price: 12999
}

function nameAndPrice(chair) {
    return `Chair name ${chair.name} and price is ${chair.price}`;

}

// console.log(nameAndPrice(gamingChair)); // 

const arr = [100, 200, 400, 8158, 6842, 75, 7965, 98]
function returnThirdValue(getVal) {
    return getVal[5]
}
console.log(returnThirdValue(arr));// this function will return fifth value on the array
