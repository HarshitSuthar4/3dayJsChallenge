const place = "Canada"
const howFar = 11462

// console.log(place+" is "+howFar+ " KM far from india"); 


console.log(`${place} is ${howFar} KM far from india`); //This is more readable clean way its called String interpolation.
  
//string methodes

const discordUserName = new String('Harshit4')
console.log(discordUserName[2]);
console.log(discordUserName.__proto__);


console.log(discordUserName.toUpperCase());
console.log(discordUserName.charAt(5)); // to find value by index
console.log(discordUserName.indexOf('s')); //to find index of a value


const newUsername = discordUserName.substring(0, 5)
console.log(newUsername);

const prvsName = discordUserName.slice(-8, -3)
console.log(prvsName);
