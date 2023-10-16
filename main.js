
// qyerySelectors
const btnLower = document.querySelector('.btn-lower');
const btnHigher = document.querySelector('.btn-higher');

// prompt
const userName = prompt("What is your name?");
const elementName = document.querySelector('.my-name');
elementName.innerHTML = userName;

// variabelen score
let playerScore = 0;
let computerScore = 0;
const totalScore = 10;

// Addeventlisteners
btnHigher.addEventListener('click', higher);
btnLower.addEventListener('click', lower);

//function getDiceNumber
function getDiceNumber() {
  const result = Math.floor((Math.random() * 6) + 1);

  return result;
}


function higher() {

  //DICE1
  let randomNumber = getDiceNumber();
  let dicelocation = "images/" + "dice-" + randomNumber + ".png";
  let img1 = document.querySelectorAll(".img-dice")[0];
  img1.setAttribute('src', dicelocation);


  //DICE1+.
  let newRandomNumber = getDiceNumber();
  let dicelocation1 = "images/" + "dice-" + newRandomNumber + ".png";
  let img2 = document.querySelectorAll(".img-dice")[1];
  img2.setAttribute('src', dicelocation1);

  //DICE2
  let randomNumber2 = getDiceNumber();
  let dicelocation2 = "images/" + "dice-" + randomNumber2 + ".png";;
  let img3 = document.querySelectorAll(".img-dice")[2];
  img3.setAttribute('src', dicelocation2);


  //DICE2+
  let newRandomNumber2 = getDiceNumber();
  let dicelocation3 = "images/" + "dice-" + newRandomNumber2 + ".png";;
  let img4 = document.querySelectorAll(".img-dice")[3];
  img4.setAttribute('src', dicelocation3);
  ////////////////////////////////////////////

  
  let playerGuess = randomNumber + newRandomNumber;
  let computerGuess = randomNumber2 + newRandomNumber2;


  if (playerGuess > computerGuess) {
    // player won
    document.querySelector(".text-field").innerHTML = "You Win";
    playerScore++;
    document.querySelector(".got-user").innerHTML = playerScore;
  } else if (playerGuess == computerGuess) {
    document.querySelector(".text-field").innerHTML = "DICE DRAW";
  } else {
    document.querySelector(".text-field").innerHTML = "You Lose";
    computerScore++;
    document.querySelector(".got-com").innerHTML = computerScore;
  }
  let totalScore = 10;
  if (playerScore == totalScore) {
    alert("Congrats "+" "+ userName+" "+"You Win");
    reset();
  }
  else if (computerScore == totalScore) {
    alert("Sorry "+" "+ userName+" "+"You Lose Play Againe!");
    reset();
  }
}



function lower() {
  //DICE1
  let randomNumber = getDiceNumber();
  let dicelocation = "images/" + "dice-" + randomNumber + ".png";
  let img1 = document.querySelectorAll(".img-dice")[0];
  img1.setAttribute('src', dicelocation);


  //DICE1+.
  let newRandomNumber = getDiceNumber();
  let dicelocation1 = "images/" + "dice-" + newRandomNumber + ".png";
  let img2 = document.querySelectorAll(".img-dice")[1];
  img2.setAttribute('src', dicelocation1);

  //DICE2
  let randomNumber2 = getDiceNumber();
  let dicelocation2 = "images/" + "dice-" + randomNumber2 + ".png";;
  let img3 = document.querySelectorAll(".img-dice")[2];
  img3.setAttribute('src', dicelocation2);


  //DICE2+
  let newRandomNumber2 = getDiceNumber();
  let dicelocation3 = "images/" + "dice-" + newRandomNumber2 + ".png";;
  let img4 = document.querySelectorAll(".img-dice")[3];
  img4.setAttribute('src', dicelocation3);
  ////////////////////////////////////////////

  let playerGuess = randomNumber + newRandomNumber;
  let computerGuess = randomNumber2 + newRandomNumber2;


  if (playerGuess < computerGuess) {
    document.querySelector(".text-field").innerHTML = "You Win";
    playerScore++;
    document.querySelector(".got-user").innerHTML = playerScore;
  } else if (playerGuess == computerGuess) {
    document.querySelector(".text-field").innerHTML = "DICE DRAW";
  } else {
    document.querySelector(".text-field").innerHTML = "You Lose";
    computerScore++;
    document.querySelector(".got-com").innerHTML = computerScore;
  }
  //console.log("this is the computerGuess "+computerGuess);
  //console.log("this is the playerGuess "+playerGuess);
  let totalScore = 10;
  if (playerScore == totalScore ) {
    alert("Congrats "+" "+ userName+" "+"You Win");
    reset();
  }
  else if (computerScore == totalScore ) {
    alert("Sorry "+" "+ userName+" "+"You Lose Play Againe!");
    reset();
  }

}

function reset() {
  window.location.reload();
}