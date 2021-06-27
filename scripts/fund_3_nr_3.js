function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
}
favoriteAnimal("Goat")


function showMessage(from, text = "no text given") {
    console.log(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
