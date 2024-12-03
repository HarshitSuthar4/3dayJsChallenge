const user = {
    userName: "Harshit Suthar",
    courseName: "JavaScript",


    course: function () {
        console.log(`${this.userName} bought ${this.courseName} course.`);
    } // THIS reffers to currunt context.

}
// user.course();

function anyFnc() {
    let username = "Harshit"
    console.log(this.username);

}
// anyFnc();

const anyFnc2 = function () {
    let username = "Harshit"
    console.log(this.username);
}

// anyFnc2();

const anyFnc3 = () => {
    let username = "Harshit"
    console.log(this.username);
} // arrow function syntax

// anyFnc3();

const arrowFnc = (num1, num2) => {
    return num1 + num2
} //arrow function syntax, explicit return
// console.log(arrowFnc(2, 200))

const arrowFnc2 = (val1, val2) =>  val1 + val2 // implicit return
const arrowFnc3 = (val1, val2) =>  (val1 + val2) // implicit return

// console.log(arrowFnc(10,10));


