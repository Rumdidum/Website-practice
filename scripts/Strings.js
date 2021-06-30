

/* 
toUpperCase()
toLowerCase()
concat() */

/* Write a function called capitalize that takes a string and 
returns that string with only the first letter capitalized.
Make sure that it can take strings that are lowercase, 
UPPERCASE or BoTh. */

function capitalized(string) {
    let firstLetter = string.slice(0,1)
    return firstLetter
}
console.log(capitalized("fest".toUpperCase()))

function capitalized(string) {
    let firstLetter = string.slice(0, 1)
    return firstLetter.toUpperCase()
}
console.log(capitalized("Ich habe es drauf")) // returns "I"


/*3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.returns that string */
/* function capitalized(string) {
    let firstLetter = string.slice(0, 1)
    return firstLetter
}
console.log(capitalized("fest".toUpperCase())) */


/* Write a function called lastLetter that takes a string and 
returns the very last letter of that string:

    a).lastLetter("abcd") should return "d" */

function lastLetter(string) {
    return string[string.length - 1]
}
console.log(lastLetter("test"))


function lastLetter_substr(string) {
    return string   
}
console.log(lastLetter_substr("Oh god".substr(-1)))


let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "Rumdidum");

console.log(newText)

function multiply(a, b) {
    return a * b;
}
function square(n) {
    return multiply(n, n);
}
function printSquare(n) {
    var squared = square(n);
    console.log(squared);
}
printSquare(4);


