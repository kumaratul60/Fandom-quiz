var chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.blue('May I have your name? '));
  console.log('--------------')
  console.log(chalk.redBright.bold('Welcome ' + userName + "!, to the quiz 'Are you a anime fan'?"));
  console.log('--------------')
}
welcome();

var questions = [
  {
    question: "Which village does belong? ",
    answer: "Shankarpur"
  },
  {
    question: "Who is the author of Harry-Potter?",
    answer: "J.K.Rowling"
  },
  {
    question: "Which city is known as temple of city? ",
    answer: "Bhubaneswar"
  },
  {
    question: "How many temple in Bhubaneswar? ",
    answer: "700"
  },
  {
    question: "How many seconds in a day? ",
    answer: "86400"
  },
  {
    question: "Who is the swami of Treta Yuga? ",
    answer: "Ram"
  },
  {
    question: "Who is the swami of Dvapar Yuga? ",
    answer: "Krishna"
  }
];

function play(question, answer) {
  var currentQuestion = readlineSync.question(chalk.magenta(question));
  if (currentQuestion.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer"));
    console.log('--------------')
    score++;
  } else {
    console.log(chalk.red("Wrong Answer"));
    console.log('--------------')
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {

    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  if (score < 3)
    console.log("OHo! You SCORED: ", score);
  else console.log("Congrates! You SCORED: ", score);
}
game();
showScores();