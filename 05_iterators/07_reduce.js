const numbers = [1, 8, 5, 7, 6]

// const totalNum = numbers.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 2) // reduce using a normal function

// console.log(totalNum);

const totalNum = numbers.reduce((acc, curr) => { return acc + curr}, 0)

console.log(totalNum);
