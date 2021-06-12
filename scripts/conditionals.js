
const select = document.querySelector('select');
// const para = document.querySelector('p');
// beides ist möglich
const para = document.getElementById('para');
const html = document.querySelector('html');


select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;
  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
// Ternary operator

select.onchange = function () {
  (select.value === 'black') ? update('#333333', 'white') : update('lightgray', 'white');
}

let greeting = (isBirthday) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';