function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
}
favoriteAnimal("Goat")


function showMessage(from, text="default text") {
    console.log(from + ": " + text);
}
showMessage("Ann"); // Ann: default text
showMessage(from = "tobi", text = "goes Hello") //tobi: goes Hello
// Everything like in Python 3
