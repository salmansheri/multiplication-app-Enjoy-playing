const num1 = Math.ceil(Math.random() * 100);

const num2 = Math.ceil(Math.random() * 100);

const questionEl = document.getElementById("question");

questionEl.innerText = "What is " + num1 + " multiplied by " + num2;

let score = JSON.parse(localStorage.getItem("score"));


let scoreEl = document.getElementById("score");

if (!score) {
  score = 0;
}

scoreEl.innerText = "score: " + score; 

const correctAnswerEl = num1 * num2;

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

formEl.addEventListener("submit", function () {
  const userAns = +inputEl.value;

  if (userAns === correctAnswerEl) {
    score++;
    updateLocalStorage(); 
  } else {
    score--;
    // updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
  stringify(score);
}
