// Dates

// let todayDate = new Date()
// console.log(todayDate.toString());
// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleString());

// let myCreatedDate = new Date(2024, 10, 30);
// let myCreatedDate = new Date(2024, 10, 30, 3, 50)
// let myCreatedDate = new Date("2024-11-30")
// let myCreatedDate = new Date("11-30-2024")
// console.log(myCreatedDate.toLocaleString());

// let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
})


