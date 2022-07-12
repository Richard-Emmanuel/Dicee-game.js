// Get a random number from 1-6
var randomNumber1 = Math.floor(Math.random() * 6 )+ 1;

// get a random dice image
var randomDiceImage1 ="dice" + randomNumber1 + ".png"; //this gets a string from dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage1; //this gets images from images/dice1.png-images/dice6.png


// change  the image source
var Image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


// Coding for the second Dice
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2 );