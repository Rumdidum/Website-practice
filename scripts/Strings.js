

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