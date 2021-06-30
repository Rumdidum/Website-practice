// My own attempt before going futher with the tutorial

for (let i = 1; i < 100; i++) {
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

// first problem: User implement user input

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

