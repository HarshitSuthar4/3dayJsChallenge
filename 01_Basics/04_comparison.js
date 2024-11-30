// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2" > 0);
console.log("02" > 0);



console.log(null > 0); //false
console.log(null == 0); // falses
console.log(null >= 0); // true

/* The reason is that an eqality check == and compasisons >, <, >=, <= work diffrently.
Comparisons convert null to a number treating it as 0.
Thats why null >= 0 is true and null > 0 is false.
*/


console.log("2" === 2); //false

// === strictly checks the values and its data type.



