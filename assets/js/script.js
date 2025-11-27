var questions = [
  {
    question: 'What is the main goal of a hunter in the Monster Hunter series?',
    choices: ['Build a farm', 'Hunt or capture large monsters', 'Explore outer space', 'Run a guild tavern'],
    correctAnswer: 'Hunt or capture large monsters',
  },
  {
    question: 'Which of the following is a flagship monster of Monster Hunter World?',
    choices: ['Rathalos', 'Nergigante', 'Barioth', 'Lagiacrus'],
    correctAnswer: 'Nergigante',
  },
  {
    question: 'What type of weapon is the Insect Glaive known for?',
    choices: ['A heavy shield-based weapon', 'A slow but powerful hammer', 'A staff that allows airborne mobility and uses Kinsects', 'A ranged weapon that fires explosive ammo'],
    correctAnswer: 'A staff that allows airborne mobility and uses Kinsects',
  },
  {
    question: 'What is the name of the elder dragon that controls ice and summons storms in MH World: Iceborne?',
    choices: ['Kushala Daora', 'Velkhana', 'Namielle', 'Alatreon'],
    correctAnswer: 'Velkhana',
  },
  {
    question: 'Why is Fatalis feared above almost all other monsters in the lore of the series?',
    choices: ['It can shapeshift', 'It destroys entire civilizations', 'It controls the tides', 'It reproduces faster than any Elder Dragon'],
    correctAnswer: 'It destroys entire civilizations',
  },
  {
    question: 'Which monster is often called the “King of the Skies”?',
    choices: ['Rathalos', 'Kulu-Ya-Ku', 'Tzitzi-Ya-Ku', 'Bnahabra'],
    correctAnswer: 'Rathalos',
  },
  {
    question: 'What is the primary habitat of Lagiacrus in Monster Hunter 3?',
    choices: ['Desert', 'Tundra', 'Aquatic environments', 'Volcanic areas'],
    correctAnswer: 'Aquatic environments',
  },
  {
    question: 'Which weapon type was introduced in Monster Hunter 2 (Dos)?',
    choices: ['Hunting Horn', 'Switch Axe', 'Charge Blade', 'Gunlance'],
    correctAnswer: 'Switch Axe',
  },
  {
    question: 'What unique ability is Chameleos best known for?',
    choices: ['Summoning thunder', 'Splitting into clones', 'Turning invisible', 'Regenerating health instantly'],
    correctAnswer: 'Turning invisible',
  },
  {
    question: 'Which Elder Dragon appeared as the final boss of Monster Hunter Freedom Unite?',
    choices: ['Amatsu', 'Shen Gaoren', 'Yamatsukami', 'Ukanlos'],
    correctAnswer: 'Ukanlos',
  },
  {
    question: 'What mechanic is heavily emphasized in Monster Hunter 4 Ultimate?',
    choices: ['Swimming', 'Bush concealment', 'Clutch Claw', 'Mounting using vertical terrain'],
    correctAnswer: 'Mounting using vertical terrain',
  },
  {
    question: 'What is Cephadrome’s larger and more aggressive desert-dwelling relative?',
    choices: ['Plesioth', 'Diablos', 'Cephalos', 'Nibelsnarf'],
    correctAnswer: 'Nibelsnarf',
  },
  {
    question: 'Which monster was the first “Black Dragon” introduced in the series?',
    choices: ['Fatalis', 'Alatreon', 'Dire Miralis', 'Safi’Jiiva'],
    correctAnswer: 'Fatalis',
  },
  {
    question: 'What characteristic defines the Dalamadur introduced in MH4U?',
    choices: ['A massive serpent Elder Dragon that coils around mountains', 'It exists only in volcanic caverns', 'It manipulates time', 'It summons unused monsters for aid'],
    correctAnswer: 'A massive serpent Elder Dragon that coils around mountains',
  },
  {
    question: 'What is the signature trait of Hypnocatrice in the Monster Hunter Frontier titles?',
    choices: ['Memory-erasing shrieks', 'Sleep-inducing gas attacks', 'Changing gender mid-hunt', 'Summoning smaller bird wyverns'],
    correctAnswer: 'Sleep-inducing gas attacks',
  },
  {
    question: 'Who directed the movie Monster Hunter (2020)?',
    choices: ['Paul Thomas Anderson', 'Uwe Boll', 'Wes Anderson', 'Paul W. S. Anderson'],
    correctAnswer: 'Paul W. S. Anderson',
  },
];

var startBtnEl = document.querySelector('#start-btn');
var timerEl = document.querySelector('#timer');
var questionEl = document.querySelector('#question');
var answerAEl = document.querySelector('#answer-a');
var answerBEl = document.querySelector('#answer-b');
var answerCEl = document.querySelector('#answer-c');
var answerDEl = document.querySelector('#answer-d');
var startPageEl = document.querySelector('#start-page');
var questionsAndAnswersEl = document.querySelector('#questions-and-answers');
var nameEntryEl = document.querySelector('#name-entry');
var scoreBoardEl = document.querySelector('#score-board');
var scoreListEl = document.querySelector('#score-list');
var scoreFormEl = document.querySelector('#score-form');
var nameInputEl = document.querySelector('#name-input');
var errorMsgEl = document.querySelector('#error-message');
var correctWrongEl = document.querySelector('#correct-wrong');
var correctWrongImg01El = document.querySelector('#correct-wrong-img-01');
var correctWrongImg02El = document.querySelector('#correct-wrong-img-02');
var correctWrongContainerEl = document.querySelector('#correct-wrong-container');
var playAgainBtnEl = document.querySelector('#play-again-btn');

var timeLeft = 120;
var currentQuestion;
var removedQuestions;
var questionCount = 0;
var timerInterval;

function startGame() {
  startBtnEl.addEventListener('click', function () {
    loadQuestion();
    startTimer();
    startPageEl.setAttribute('class', 'hide-content');
    questionsAndAnswersEl.setAttribute('class', 'grid');
  });
  checkAnswer();
}

// TODO: Disable all buttons after one is clicked, then re-enable after question load
function checkAnswer() {
  questionsAndAnswersEl.addEventListener('click', function (event) {
    var element = event.target;
    if (element.textContent === currentQuestion.correctAnswer) {
      correctWrongContainerEl.setAttribute('class', 'grid-el');
      correctWrongImg01El.setAttribute('src', 'assets/images/HappyFelyne.png');
      correctWrongImg02El.setAttribute('src', 'assets/images/HappyFelyne.png');
      correctWrongEl.textContent = 'CORRECT!';
      questionCount++;
      setTimeout(function () {
        correctWrongContainerEl.setAttribute('class', 'hide-content');
        loadQuestion();
        endGame();
      }, 750);
    } else {
      correctWrongContainerEl.setAttribute('class', 'grid-el');
      correctWrongImg01El.setAttribute('src', 'assets/images/KOdFelyne1.png');
      correctWrongImg02El.setAttribute('src', 'assets/images/KOdFelyne1.png');
      correctWrongEl.textContent = 'WRONG!';
      timeLeft -= 10;
      timerEl.textContent = timeLeft;
      setTimeout(function () {
        correctWrongContainerEl.setAttribute('class', 'hide-content');
        loadQuestion();
        endGame();
      }, 750);
    }
  });
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft = 0;
      timerEl.textContent = timeLeft;
      endGame();
    }
  }, 1000);
}

function loadQuestion() {
  index = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[index];
  removedQuestions = questions.splice(index, 1);
  questionEl.textContent = currentQuestion.question;
  answerAEl.textContent = currentQuestion.choices[0];
  answerBEl.textContent = currentQuestion.choices[1];
  answerCEl.textContent = currentQuestion.choices[2];
  answerDEl.textContent = currentQuestion.choices[3];
}

function resetGame() {
  timeLeft = 120;
  questionCount = 0;
  questions = [
    {
      question: 'What is the main goal of a hunter in the Monster Hunter series?',
      choices: ['Build a farm', 'Hunt or capture large monsters', 'Explore outer space', 'Run a guild tavern'],
      correctAnswer: 'Hunt or capture large monsters',
    },
    {
      question: 'Which of the following is a flagship monster of Monster Hunter World?',
      choices: ['Rathalos', 'Nergigante', 'Barioth', 'Lagiacrus'],
      correctAnswer: 'Nergigante',
    },
    {
      question: 'What type of weapon is the Insect Glaive known for?',
      choices: ['A heavy shield-based weapon', 'A slow but powerful hammer', 'A staff that allows airborne mobility and uses Kinsects', 'A ranged weapon that fires explosive ammo'],
      correctAnswer: 'A staff that allows airborne mobility and uses Kinsects',
    },
    {
      question: 'What is the name of the elder dragon that controls ice and summons storms in MH World: Iceborne?',
      choices: ['Kushala Daora', 'Velkhana', 'Namielle', 'Alatreon'],
      correctAnswer: 'Velkhana',
    },
    {
      question: 'Why is Fatalis feared above almost all other monsters in the lore of the series?',
      choices: ['It can shapeshift', 'It destroys entire civilizations', 'It controls the tides', 'It reproduces faster than any Elder Dragon'],
      correctAnswer: 'It destroys entire civilizations',
    },
    {
      question: 'Which monster is often called the “King of the Skies”?',
      choices: ['Rathalos', 'Kulu-Ya-Ku', 'Tzitzi-Ya-Ku', 'Bnahabra'],
      correctAnswer: 'Rathalos',
    },
    {
      question: 'What is the primary habitat of Lagiacrus in Monster Hunter 3?',
      choices: ['Desert', 'Tundra', 'Aquatic environments', 'Volcanic areas'],
      correctAnswer: 'Aquatic environments',
    },
    {
      question: 'Which weapon type was introduced in Monster Hunter 2 (Dos)?',
      choices: ['Hunting Horn', 'Switch Axe', 'Charge Blade', 'Gunlance'],
      correctAnswer: 'Switch Axe',
    },
    {
      question: 'What unique ability is Chameleos best known for?',
      choices: ['Summoning thunder', 'Splitting into clones', 'Turning invisible', 'Regenerating health instantly'],
      correctAnswer: 'Turning invisible',
    },
    {
      question: 'Which Elder Dragon appeared as the final boss of Monster Hunter Freedom Unite?',
      choices: ['Amatsu', 'Shen Gaoren', 'Yamatsukami', 'Ukanlos'],
      correctAnswer: 'Ukanlos',
    },
    {
      question: 'What mechanic is heavily emphasized in Monster Hunter 4 Ultimate?',
      choices: ['Swimming', 'Bush concealment', 'Clutch Claw', 'Mounting using vertical terrain'],
      correctAnswer: 'Mounting using vertical terrain',
    },
    {
      question: 'What is Cephadrome’s larger and more aggressive desert-dwelling relative?',
      choices: ['Plesioth', 'Diablos', 'Cephalos', 'Nibelsnarf'],
      correctAnswer: 'Nibelsnarf',
    },
    {
      question: 'Which monster was the first “Black Dragon” introduced in the series?',
      choices: ['Fatalis', 'Alatreon', 'Dire Miralis', 'Safi’Jiiva'],
      correctAnswer: 'Fatalis',
    },
    {
      question: 'What characteristic defines the Dalamadur introduced in MH4U?',
      choices: ['A massive serpent Elder Dragon that coils around mountains', 'It exists only in volcanic caverns', 'It manipulates time', 'It summons unused monsters for aid'],
      correctAnswer: 'A massive serpent Elder Dragon that coils around mountains',
    },
    {
      question: 'What is the signature trait of Hypnocatrice in the Monster Hunter Frontier titles?',
      choices: ['Memory-erasing shrieks', 'Sleep-inducing gas attacks', 'Changing gender mid-hunt', 'Summoning smaller bird wyverns'],
      correctAnswer: 'Sleep-inducing gas attacks',
    },
    {
      question: 'Who directed the movie Monster Hunter (2020)?',
      choices: ['Paul Thomas Anderson', 'Uwe Boll', 'Wes Anderson', 'Paul W. S. Anderson'],
      correctAnswer: 'Paul W. S. Anderson',
    },
  ];
  timerEl.textContent = '120';
  scoreBoardEl.setAttribute('class', 'hide-content');
  nameEntryEl.setAttribute('class', 'hide-content');
  startPageEl.setAttribute('class', 'hide-content');
  questionsAndAnswersEl.setAttribute('class', 'grid');
  loadQuestion();
  startTimer();
}

function playAgain() {
  playAgainBtnEl.addEventListener('click', function () {
    resetGame();
  });
}

// TODO: play again button
// TODO: save score to local storage
function endGame() {
  if (questionCount === 10 || timeLeft === 0) {
    questionEl.textContent = 'FINISHED!';
    questionsAndAnswersEl.setAttribute('class', 'hide-content');
    nameEntryEl.setAttribute('class', 'flexbox');
  }
  scoreFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameValue = nameInputEl.value;
    if (nameValue === '') {
      console.log(nameValue);
      errorMsgEl.setAttribute('style', 'visibility: visible;');
    } else {
      var newScore = document.createElement('li');
      newScore.textContent = nameValue + ' ' + timeLeft;
      scoreListEl.appendChild(newScore);
      nameEntryEl.setAttribute('class', 'hide-content');
      scoreBoardEl.setAttribute('class', 'flexbox');
      playAgain();
    }
  });
}

startGame();
