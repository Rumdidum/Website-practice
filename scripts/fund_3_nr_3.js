/* function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
}
favoriteAnimal("Goat")


// program to display text 10 times
const n = 10;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`${i} I love JavaScript.`);
} */

/*  function min_if(a, b) {
    if (a < b) {
        return a
    } else if (b < a) {
        return b
    }
}

console.log(min_if(1, 2))
 
function min_mark(a, b) {
    return (a < b) ? a : b;
}

console.log(min_mark(1, -3))
 */

// let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// console.log(sum(1, 2)); // 3


/* function add7(number) {
    return number +7
}

console.log(add7(7))



let sum = (a, b) => a + b

console.log(sum(2, 4)) */

// Write a function called multiply that takes 2 numbers and returns their product.

/* function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(5, 10))

let multiply_arrow = (num1, num2) => num1 * num2

console.log(multiply_arrow(43, 10)) */

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
    return string[string.length -1]
}

console.log(lastLetter("tesö"))

