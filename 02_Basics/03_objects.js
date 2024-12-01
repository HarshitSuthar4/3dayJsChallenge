// singleton
// Object.create // Constructor method


// object literals

const symb = Symbol("BGMI")
const myinGameStates = { 
    [symb] : "BGMI",
    playerNumID : 1895482158,
    userID : "HarshitSuthar",
    fdRatio: "5.6 F/D",
    tier : "Ace",
    higestTier : "Conqueror",
    "curruntSeason" : " 9"
}

// console.log(myinGameStates.userID); // First way to print a value of object
// console.log(myinGameStates["fdRatio"]); // Secound way to print a value of object  
// console.log(myinGameStates["curruntSeason"]);// to print string value of object
// console.log(myinGameStates[symb]); //to print the symbol value of an object

// myinGameStates.userID = "Harsh"
// Object.freeze(myinGameStates) // freeze is used to propogate values
// myinGameStates.userID = "Harshit"

// console.log(myinGameStates);


myinGameStates.newSeason = function(){
    console.log("New season arriving soon");
} // 


myinGameStates.newSeason2 = function(){
    console.log(`Hello, ${this.userID}`);
} // This is how you can access values of object inside a function


console.log(myinGameStates.newSeason());
// console.log(myinGameStates.newSeason2());





