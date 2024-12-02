
// const igUserName = new Object() // Singleton

//Constructer
const igUser = {}

igUser.id = "HarshitSuthar__"
igUser.name = "Harshit"
igUser.isLoggedIn = true

// console.log(igUser);

const ogUser = {
    email: "og@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Harshit",
            lastName: "Suthar"
        }
    }
}

// console.log(ogUser.fullname.userfullname.firstName);

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }

// const obj3 = {obj1, obj2}; // this will creat the same problem as we seen in array.

// const obj3 = Object.assign({}, obj1, obj2) // this is how we can assign object values

const obj3 = { ...obj1, ...obj2 } // this is more eassy and more used way 
// console.log(obj3);

const users = [

    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    }
]
// console.log(users[1].email) // this is used when we have object inside array 

// console.log(Object.keys(igUser)); // get keys of an object
// console.log(Object.values(igUser)); // get key values of object
// console.log(Object.entries(igUser)); // it will convert all values into array ["key" "value"]

console.log(ogUser.hasOwnProperty('email')); // to find out if a perticuler object have a perticuler key or not







