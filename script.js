"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".text").value);
  if (!guess)
    document.querySelector(".stat").textContent = "❓ Number is missing!";
  else if (guess === secretNumber) {
    document.querySelector(".stat").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".stat").textContent = "Too high!";
      score--;
      document.querySelector(".sc").textContent = score;
    } else {
      document.querySelector(".stat").textContent = "😮 You lost the game! ";
      document.querySelector(".sc").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".stat").textContent = "Too low!";
      score--;
      document.querySelector(".sc").textContent = score;
    } else {
      document.querySelector(".stat").textContent = "😮 You lost the game! ";
      document.querySelector(".sc").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".sc").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".text").value = "";
  document.querySelector(".stat").textContent = "Start guessing...";
});
