// Enter your Name or leave Blank under userName
let userName = '';
userName.length > 0 ? console.log(`Hello, ${userName}!`) : console.log(`Hello, there!`);
// Enter a question for the Magic 8 Ball to answer
let userQuestion = '';
// The block of code below takes your userName and userQuestion and generates output to the console
if (userName.length > 0  && userQuestion.length > 0) {
  console.log(`${userName} wants to know: ${userQuestion} What will be the answer Magic 8-Ball?`);
} else if (userName.length > 0  && userQuestion.length === 0) {
  console.log(`Please ask Magic 8 Ball your most important questions!`);
} else if (userName.length === 0  && userQuestion.length > 0) {
  console.log(`User wants to know: ${userQuestion} What will be the answer Magic 8-Ball?`);
} else {
  console.log(`Please ask Magic 8 Ball your most important questions!`);
}
// The block of code below takes randomNumber and generates output to the console
// let randomNumber is assigned Math.floor & Math.round. Which creates a random number from 0-8
if (userName.length > 0  && userQuestion.length > 0) {
  let randomNumber = Math.floor(Math.random() * 8);
  if (randomNumber == 0) {
    console.log('It is certain');
  } else if (randomNumber == 1) {
    console.log('It is decidedly so');
  } else if (randomNumber == 2) {
    console.log('Reply hazy try again');
  } else if (randomNumber == 3) {
    console.log('Cannot predict now');
  } else if (randomNumber == 4) {
    console.log('Do not count on it');
  } else if (randomNumber == 5) {
    console.log('My sources say no');
  } else if (randomNumber == 6) {
    console.log('Outlook not so good');
  } else if (randomNumber == 7) {
    console.log('Signs point to yes');
  } else {
    console.log('This Broke!!!');
  }
} else if (userName.length === 0  && userQuestion.length > 0) {
  let randomNumber = Math.floor(Math.random() * 8);
  if (randomNumber == 0) {
    console.log('It is certain');
  } else if (randomNumber == 1) {
    console.log('It is decidedly so');
  } else if (randomNumber == 2) {
    console.log('Reply hazy try again');
  } else if (randomNumber == 3) {
    console.log('Cannot predict now');
  } else if (randomNumber == 4) {
    console.log('Do not count on it');
  } else if (randomNumber == 5) {
    console.log('My sources say no');
  } else if (randomNumber == 6) {
    console.log('Outlook not so good');
  } else if (randomNumber == 7) {
    console.log('Signs point to yes');
  } else {
    console.log('This Broke!!!');
  }
} else {
  ;
}
