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
secondDiv.innerText = "second div"

container.append(div)
container.append(secondDiv)
secondDiv.classList.toggle("two")

div.append(strong)

console.log(span_one.dataset)
// div.innerHTML = "<strong>Hello world </strong>"
body.append(container)
