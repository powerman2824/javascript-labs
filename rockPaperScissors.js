const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    userChoice = userInput;
    console.log(`The user picked ${userChoice}!`);
  }
  else if (userInput === 'paper') {
    userChoice = userInput;
    console.log(`The user picked ${userChoice}!`);
  }
  else if (userInput === 'scissors') {
    userChoice = userInput;
    console.log(`The user picked ${userChoice}!`);
  }
  else if (userInput === 'bomb') {
    userChoice = userInput;
    console.log(`The user picked ${userChoice}!`);
  }
  else if (userInput !== 'bomb' || userInput !== 'rock' || userInput !== 'paper' || userInput !== 'scissors') {
    userInput = "nothing"
    userChoice = userInput;
    console.log(`The user picked ${userChoice}!`);
  }
  else {
    console.log("Error!!");
  }
};

const getComputerChoice = randomNumber => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    randomNumber = 'rock'
    computerChoice = randomNumber
    console.log(`The computer picked ${computerChoice}!`);
  }
  else if (randomNumber === 1) {
    randomNumber = 'paper'
    computerChoice = randomNumber
    console.log(`The computer picked ${computerChoice}!`);
  }
  else if (randomNumber === 2) {
    randomNumber = 'scissors'
    computerChoice = randomNumber
    console.log(`The computer picked ${computerChoice}!`);
  }
  else {
    console.log("Error!!");
  }
}

const determineWinner = () => {
  getComputerChoice();
  if (userChoice === computerChoice) {
    outcome = 1;
    console.log("There is a Draw");
  }
  else if (userChoice === 'rock' && computerChoice === 'paper') {
    outcome = 2;
    console.log("The computer won!");
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock') {
    outcome = 3;
    console.log("The computer won!");
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors') {
    outcome = 4;
    console.log("The computer won!");
  }
  else if (userChoice === 'paper' && computerChoice === 'rock') {
    outcome = 5;
    console.log("The user won!");
  }
  else if (userChoice === 'rock' && computerChoice === 'scissors') {
    outcome = 6;
    console.log("The user won!");
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper') {
    outcome = 7;
    console.log("The user won!");
  }
  else if (userChoice === 'bomb') {
    outcome = 8;
    console.log("How dare you use a BOMB!!");
  }
  else if (userChoice === 'nothing') {
    outcome = 9;
    console.log("Please make a better choice, and play again.");
  }
  else {
    console.log("Still no winner yet!");
  }
}

// let theChoice = document.getElementById("theChoice").value;
const playGame = () => {
  let theChoice = document.getElementById("theChoice").value;
  getUserChoice(`${theChoice}`);
  determineWinner();
  if (outcome === 1) {
    theOutcome = `This game was a draw 🤜🤛 🤝. You choose ${userChoice} and the computer choose ${computerChoice}`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 2) {
    theOutcome = `The computer has won😁. You choose 💎${userChoice}😣 and the computer choose ${computerChoice}📰`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 3) {
    theOutcome = `The computer has done it🤣. You choose ✂️${userChoice}😤 and the computer choose ${computerChoice}☄️`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 4) {
    theOutcome = `The computer won🤗. You choose 📰${userChoice}😱 and the computer choose ${computerChoice}✂️`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 5) {
    theOutcome = `You won😁. You choose ${userChoice}📰 and the computer choose 💎${computerChoice}`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 6) {
    theOutcome = `You did it🤣 and won. The computer silly choose ✂️${computerChoice}😤 and you choose ${userChoice}☄️`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 7) {
    theOutcome = `You won🤗. That crazy computer choose 📰${computerChoice}😱 and you choose ${userChoice}✂️`;
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 8) {
    theOutcome = "Oh Snap!!! YOU Dropped a 💣💢💥";
    document.getElementById("result").innerHTML = theOutcome;
  }
  else if (outcome === 9) {
    theOutcome = "More Apps & Quizzes Coming Soon!!👍";
    document.getElementById("result").innerHTML = theOutcome;
  }
}

playGame();

// console.log(document.getElementById("theChoice").value)
