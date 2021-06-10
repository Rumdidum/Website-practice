let x = 10;
document.getElementById("demo").innerHTML = "Result = " + x;


// let num1 = 10;
// let num2 = 50;

// num1++;
// console.log(num1);
// --num1;
// console.log(num1);

const btn = document.getElementById('b-test');
const txt = document.getElementById('p-stop');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}