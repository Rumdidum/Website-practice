let song = 'Fight the Youth';
song = `Fight the Youth`;


let score = 9;
let highestScore = 10;
let output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;

document.getElementById("strings").innerHTML = "test " + output;


function basics() {
    console.log("test")
}

basics();