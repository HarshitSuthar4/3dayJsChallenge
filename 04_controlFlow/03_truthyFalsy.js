

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