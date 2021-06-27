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

 function min_if(a, b) {
    if (a < b) {
        return a
    } else if (b < a) {
        return b
    }
}

console.log(min_if(1, 2))
 
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(1, -3))

function min_or(a, b) {
    return (a < b) || (b < a);
}

console.log(min_or(1, -3))