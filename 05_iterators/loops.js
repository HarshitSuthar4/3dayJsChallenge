// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("Done till 5");

    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //    console.log(`inner loop value: ${j} and inner loop ${i}`); 
        // console.log(i+'*'+j+'='+ i*j);

    }
}

let marvelHeroes = ["Captain America", "Dr. Strange", "Thor", "Loki"]
// console.log(marvelHeroes.length);

for (let index = 0; index < marvelHeroes.length; index++) {
    const element = marvelHeroes[index];
    // console.log(element);
} // For loop on arrays


// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 Found");
        break
    }
    console.log(`Value of index is ${index}`);
} // This is how to break control flow using If

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 Found");
        continue
    }
    console.log(`Value of index is ${index}`);
}