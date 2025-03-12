import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = generateCard;

document.getElementById("newCard").addEventListener("click", generateCard);

function generateCard() {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let shapes = ["♠", "♥", "♦", "♣"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomShape = Math.floor(Math.random() * shapes.length);  
  let number = numbers[randomNumber];
  let shape = shapes[randomShape];

  document.querySelector(".number").innerText = number;
  document.querySelector(".top").innerText = shape;
  document.querySelector(".bottom").innerText = shape;

  if (shape === "♥" || shape === "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
}

document.getElementById("newCard").addEventListener("click", generateCard);