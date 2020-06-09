let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);
let leftDicesrc = "images/dice" + randomNumber1 + ".png";
let rightDicesrc = "images/dice" + randomNumber2 + ".png";
let leftDice = document.querySelector(".img1");
let rightDice = document.querySelector(".img2");
leftDice.setAttribute("src", leftDicesrc);
rightDice.setAttribute("src", rightDicesrc);

let header = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    header.textContent = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    header.textContent = "Player 2 Wins!";
}
else {
    header.textContent = "Draw";
}