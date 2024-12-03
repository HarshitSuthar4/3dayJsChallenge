// Immediately invoked function expression (IIFE)

(function one() {
    console.log(`DB NOT CONNECTED`);

})(); // Syntax of IIFE  (Named IIFE) Semicolon is importent if there are more then one IIFE

    ((name) => {
        console.log(`DB NOT CONNECTED ${name}`);
    })("Harshit") // this is how we pass param in IIFE 