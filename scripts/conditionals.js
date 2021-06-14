/* let question = prompt("What is the 'official' name of JavaScript");

if (question === "ECMAScript") {
  console.log(`Congratz its ECMAScript!`)
} else {
  console.log("You don't know? ECMAScript!")
}

 */

/* let value = prompt("give me a number");

if (value > 0) {
  console.log("greater than zero")
} else if (value < 0) {
  console.log("less than zero")
} else if (value == 0) {
  console.log("equals zero")
} else {
  console.log("i need a number!")
} */

/* let a = 4;
let b = 2;
let result;

(a + b < 4) ? result = "Below" : result = "Over";

console.log(result); */


/* 
// Set the current day of the week to a variable, with 1 being Monday and 7 being Sunday
const day = new Date().getDay();

switch (day) {
  case 1:
    console.log("Happy Monday!");
    break;
  case 2:
    console.log("It's Tuesday. You got this!");
    break;
  case 3:
    console.log("Hump day already!");
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log("Happy Friday!");
    break;
  case 6:
    console.log("Have a wonderful Saturday!");
    break;
  case 7:
    console.log("It's Sunday, time to relax!");
    break;
  default:
    console.log("Something went horribly wrong...");
} */


const grade = 87;

switch (true) {
  // If score is 90 or greater
  case grade >= 90:
    console.log("A");
    break;
  // If score is 80 or greater
  case grade >= 80:
    console.log("B");
    break;
  // If score is 70 or greater
  case grade >= 70:
    console.log("C");
    break;
  // If score is 60 or greater
  case grade >= 60:
    console.log("D");
    break;
  // Anything 59 or below is failing
  default:
    console.log("F");
}