

/*
Falsy Values: 

False, 0, -0, BigInt 0n, "", null, undefined, NaN 

Truthy Values: 

Expect this all the value are truthy values

"0", 'false', " ", [], {}, function(){}
*/

const userEmail = [];

if (userEmail) {
    // console.log("Got user Email");

} else {
    // console.log("Don't have user Email");
}


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("object is empty")
}

// Nullish Coalescing Operator (??): null undefined 

let val;
val = 5 ?? 10
val = null ?? 20
val = undefined ?? 30
val = null ?? 40 ?? 400

// console.log(val);

//Terniary Operator
//condition ? true : false
const iceTeaPrice = 1000
iceTeaPrice <=900 ? console.log("Less than 900"): console.log("More than 900");


