const body = document.body
const span_one = document.querySelector("#one")

const container = document.createElement("div")
container.id = "container"
const containerClass = container.classList.toggle("container-class")

const div = document.createElement("div")
div.id = "first-div"
div.innerText = "hello"

const strong = document.createElement("strong")
strong.innerText = "Strong Text?"

const secondDiv = document.createElement("div")
secondDiv.classList.toggle("two")
secondDiv.innerText = "second div"

body.append(container)
container.append(div)
div.append(strong)
container.append(secondDiv)

console.log(span_one.dataset)
// div.innerHTML = "<strong>Hello world </strong>"
