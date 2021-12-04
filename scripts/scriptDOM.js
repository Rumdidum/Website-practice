// ID container
const container = document.querySelector('#container');

const divContainer = document.createElement("div");
const hContent = document.createElement("h3");
const pContent = document.createElement("p");

// <div> container
divContainer.textContent = "hello my little one";
divContainer.setAttribute('style', 'color: blue; background: pink');

// h3
hContent.textContent = "I'am in a div";
divContainer.appendChild(hContent);

// <p>
pContent.textContent = "ME TOO!";
hContent.appendChild(pContent);

//div container
container.appendChild(divContainer);