const class11 = ["a", "b", "c", "d", "e", "f", "g", "h"]
const class12 = ["i", "j", "k", "l"]

// class11.push(class12); It will push the entire array into the exixting array 
// console.log(class11);
// console.log(class11[8][1])

// const allStudents = class11.concat(class12); // Fist way to merge array using "Concat" method

// console.log(allStudents);

const all_Students = [...class11, ...class12]; // Secound way to merge array using "Spread Oprator" (Preferred way)
// console.log(all_Students);

const multipalArr = [1, 2, 3, 4,[5, 6, 7],11,[8, 9, 10, 11,[12, 13, 14, 15]]]

const singleArr = multipalArr.flat(Infinity);

// console.log(singleArr);

// console.log(Array.isArray("Harshit"));
// console.log(Array.from("Harshit")); // To convert any data type to array
let player1 = "P1"
let player2 = "P2"
let player3 = "P3"
let player4 = "P4"

console.log(Array.of(player1, player2, player3, player4)) //  To convert any element to array
