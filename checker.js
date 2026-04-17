let questions = [
  "Do you feel stressed often?",
  "Do you struggle to sleep?",
  "Do you feel unmotivated?",
  "Do you find it hard to focus?"
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[current];
}

function answer(choice) {
  if (choice === "yes") score += 2;
  if (choice === "sometimes") score += 1;

  current++;

  let progress = (current / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let text = "";

  if (score <= 3) text = "You are doing well 👍";
  else if (score <= 6) text = "You may feel some stress";
  else text = "Consider talking to someone 💬";

  document.getElementById("resultText").innerText = text;
}

loadQuestion();


