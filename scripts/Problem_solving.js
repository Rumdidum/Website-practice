// My own attempt before going futher with the tutorial

/* for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 & i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0 & !(i % 5 == 0)) {
        console.log("Fizz")
    } else if (i % 5 == 0 & !(i % 3 == 0)) {
        console.log("Buzz")
    } else {
        console.log(i)
    }

}
 */


/* 
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number 
*/
// first problem: User implement user input
/* let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Next subproblem: "Loop from 1 to the entered number"
for (let i = 1; i <= answer; i++) {
    console.log(i);
} */

// next problem: If the current number is divisible by 3, then print Fizz.
/* for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
} */

// next one: If the current number is divisible by 5 then print Buzz.
/* for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }

}
 */
// Last subproblem: If the current number is divisible by 3 and 5 then print FizzBuzz.

/* for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }

} */