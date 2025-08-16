var randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber) + 1;

var randomDice = "dice" + randomNumber + ".png";
var randomImages = "images/" + randomDice;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImages);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImages2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImages2);

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1, Wins!";
}else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2, Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}

