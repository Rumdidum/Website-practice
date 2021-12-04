const container = document.querySelector('#container');
const content = document.createElement("p")

content.classList.add("content")
content.style.color = 'red'
content.textContent = "hello my little one"


// As long as this is not defined, nothing happens
container.appendChild(content);

const hContent = document.createElement("h3")
container.appendChild(hContent);
hContent.style.color = 'blue'
hContent.textContent = "hello my little one"