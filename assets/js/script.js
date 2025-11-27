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
  {
    question: 'What item is traditionally used to capture a monster?',
    choices: ['Farcaster', 'Pitfall Trap', 'Shock Trap + Tranq Bombs', 'Screamer Pod'],
    correctAnswer: 'Shock Trap + Tranq Bombs',
  },
  {
    question: 'Which monster is the female counterpart to Rathalos?',
    choices: ['Pink Rathalos', 'Rathian', 'Seregios', 'Legiana'],
    correctAnswer: 'Rathian',
  },
  {
    question: 'In Monster Hunter Rise, what village serves as the player’s home hub?',
    choices: ['Dundorma', 'Astera', 'Kokoto', 'Kamura Village'],
    correctAnswer: 'Kamura Village',
  },
  {
    question: 'What makes Nargacuga particularly threatening?',
    choices: ['Fire breath', 'Paralyzing tail spines', 'Extreme speed and agility', 'Ability to fly for long periods'],
    correctAnswer: 'Extreme speed and agility',
  },
  {
    question: 'Which monster can change weapon types in Monster Hunter Stories?',
    choices: ['Yian Kut-Ku', 'Mizutsune', 'Valstrax', 'Glavenus'],
    correctAnswer: 'Glavenus',
  },
  {
    question: 'Which monster is known for using bubbles as part of its combat style?',
    choices: ['Shogun Ceanataur', 'Mizutsune', 'Tetranadon', 'Ludroth'],
    correctAnswer: 'Mizutsune',
  },
  {
    question: 'What special mechanic did Generations/Generations Ultimate introduce?',
    choices: ['Kinsects', 'Wirebugs', 'Hunter Arts & Hunting Styles', 'Slinger'],
    correctAnswer: 'Hunter Arts & Hunting Styles',
  },
  {
    question: 'What material is known as the “Living proof of a hunter’s bravery”?',
    choices: ['Elder Dragon Blood', 'Wyvern Gem', 'Mantle', 'Plate'],
    correctAnswer: 'Plate',
  },
  {
    question: 'What is the evolved form of Xeno’Jiiva?',
    choices: ['Gogmazios', 'Safi’Jiiva', 'Dire Miralis', 'Ruiner Nergigante'],
    correctAnswer: 'Safi’Jiiva',
  },
  {
    question: 'What unusual trait does Khezu have compared to most wyverns?',
    choices: ['No legs', 'No eyes', 'Regrowable limbs', 'Photosynthesis'],
    correctAnswer: 'No eyes',
  },
  {
    question: 'Which Frontier monster is known as the ‘White Saint’?',
    choices: ['Espinas', 'Disufiroa', 'Khezu', 'Kuarusepusu'],
    correctAnswer: 'Disufiroa',
  },
  {
    question: 'Which monster was originally exclusive as a Deviant variant in MHGU?',
    choices: ['Dreadking Rathalos', 'Thunderlord Zinogre', 'Soulseer Mizutsune', 'Silverwind Nargacuga'],
    correctAnswer: 'Dreadking Rathalos',
  },
  {
    question: 'What is the ecological role of the Elder Dragon Nakarkos in MH Generations?',
    choices: ['Creates volcanic islands', 'Restores coral reefs', 'Mimics skeletons and devours the dead', 'Controls local weather'],
    correctAnswer: 'Mimics skeletons and devours the dead',
  },
  {
    question: 'Which Elder Dragon is known to “terraform” its environment with crystal',
    choices: ['Shagaru Magala', 'Teostra', 'Daora', 'Xeno’Jiiva'],
    correctAnswer: 'Xeno’Jiiva',
  },
  {
    question: 'Why does Amatsu’s arena appear calm before the fight begins?',
    choices: ['It creates a vacuum of still air before unleashing storms', 'It freezes time', 'It suppresses wind currents', 'It feeds on ambient bioenergy'],
    correctAnswer: 'It creates a vacuum of still air before unleashing storms',
  },
  {
    question: 'What is the true nature of Shagaru Magala in relation to Gore Magala?',
    choices: ['Its offspring', 'A separate species', 'A Gore Magala that reached maturity', 'A symbiotic parasite'],
    correctAnswer: 'A Gore Magala that reached maturity',
  },
  {
    question: 'What is Espinas most known for in Frontier before it wakes?',
    choices: ['Playing dead', 'Being unusually passive', 'Being extremely aggressive', 'Scream-based one-shots'],
    correctAnswer: 'Being unusually passive',
  },
  {
    question: 'In Monster Hunter lore, what is the term for the “cycle” that Elder Dragons are believed to maintain?',
    choices: ['The Elder Circuit', 'The Bio-Loop', 'The Balance of Life', 'The Age of Wyverns'],
    correctAnswer: 'The Balance of Life',
  },
  {
    question: 'Which Elder Dragon is rumored to predate civilization itself and is tied to the concept of “the beginning”?',
    choices: ['Nakarkos', 'Zorah Magdaros', 'Fatalis', 'Shara Ishvalda'],
    correctAnswer: 'Shara Ishvalda',
  },
  {
    question: 'What is Nergigante’s ecological purpose according to the Research Commission?',
    choices: ['Protect the Everstream', 'Regulate Elder Dragon populations by hunting them', 'Stabilize magnetic fields', 'Spread bioenergy'],
    correctAnswer: 'Regulate Elder Dragon populations by hunting them',
  },
  {
    question: 'What ancient organization is said to have chronicled the earliest Elder Dragon encounters?',
    choices: ['The Scholars of Dundorma', 'The First Wyverians', 'The Sapphire Research Guild', 'The Chrono-Casters'],
    correctAnswer: 'The First Wyverians',
  },
  {
    question: 'Why are the First Wyverians considered crucial to the Guild’s foundation?',
    choices: ['They forged the original Guild Blade', 'They established the first hunter ranks', 'They possess vast ancestral knowledge and guided humanity', 'They control the Elder Dragon Council'],
    correctAnswer: 'They possess vast ancestral knowledge and guided humanity',
  },
  {
    question: 'What monster is theorized to have influenced the ancient legend of a world-ending flame dragon?',
    choices: ['Kushala Daora', 'Nakarkos', 'Alatreon', 'Fatalis'],
    correctAnswer: 'Fatalis',
  },
  {
    question: 'Which monster in Frontier is known for shifting between multiple elemental states mid-hunt?',
    choices: ['Kuarusepusu', 'Disufiroa', 'Rukodiora', 'Dyuragaua'],
    correctAnswer: 'Rukodiora',
  },
  {
    question: 'What is the suspected cause of the Frenzied Virus in 4U’s lore?',
    choices: ['Alatreon’s bioenergy', 'Shagaru’s pheromones', 'Gore’s parasitic mutation', 'Wylk crystals'],
    correctAnswer: 'Gore’s parasitic mutation',
  },
  {
    question: 'What is the “ancient prophecy” surrounding the Guiding Lands in Iceborne?',
    choices: ['It would collapse into the Everstream', 'Its ecosystems would merge into a singular biome', 'A dragon god would awaken beneath it', 'Hunters would be forbidden from entering'],
    correctAnswer: 'Its ecosystems would merge into a singular biome',
  },
  {
    question: 'What is one major ecological effect of the “Fallow” phase of the region’s weather cycle?',
    choices: ['Monster migration increases', 'Elder Dragons hibernate', 'Water becomes toxic', 'Coral structures grow rapidly'],
    correctAnswer: 'Monster migration increases',
  },
  {
    question: 'Which monster serves as the flagship monster and main story catalyst in Monster Hunter Wilds?',
    choices: ['Jin Dahaad', 'Rey Dau', 'Arkveld', 'Poogie'],
    correctAnswer: 'Arkveld',
  },
  {
    question: 'What is the name of the new mount introduced in Wilds that lets hunters traverse terrain and switch weapons mid-hunt?',
    choices: ['Seikret', 'Palamute', 'Vespoid', 'Wudwud'],
    correctAnswer: 'Seikret',
  },
  {
    question: 'What new combat mechanic allows players in Wilds to guard an attack and then push back a monster, opening for a powerful follow-up?',
    choices: ['Rath-from-Above', 'Focus Mode', 'Offset Attack', 'Power Clash'],
    correctAnswer: 'Power Clash',
  },
  {
    question: 'What is the theorized origin of the oil-rich basins seen throughout the Wilds?',
    choices: ['Massive decayed Leviathans from a prehistoric era', 'Leftover sludge from ancient weapon tests', 'Stored “dragon fluids” from the Elder Crossing', 'A geothermal anomaly caused by Shara Ishvalda'],
    correctAnswer: 'Massive decayed Leviathans from a prehistoric era',
  },
  {
    question: 'What is the Research Commission’s current theory regarding the original purpose of Wylk Stones within ancient Wilds civilization?',
    choices: ['They were used to train Elder Dragons', 'They served as the ancient civiliazations main form of sustenance', 'They were a power source used by the ancient Wyverian civilization', 'They were used for communication across continents'],
    correctAnswer: 'They were a power source used by the ancient Wyverian civilization',
  },
  {
    question: 'Before Monster Hunter World, what key item did hunters need to throw at a monster to track its location on the map?',
    choices: ['Flash Bomb', 'Paint Bomb', 'Paintball', 'Sonic Tracker'],
    correctAnswer: 'Paintball',
  },
  {
    question: 'In what game was Nargacuga the flagship monster?',
    choices: ['Monster Hunter Freedom Unite', 'Monster Hunter Frontier G', 'Monster Hunter 4', 'Monster Hunter Freedom 2'],
    correctAnswer: 'Monster Hunter Freedom Unite',
  },
  {
    question: 'Who serves as your main handler and quest guide in Monster Hunter: World?',
    choices: ['The Fiver Bro', 'The Seeker', 'The Handler', 'The Meowscular Chef'],
    correctAnswer: 'The Handler',
  },
  {
    question: 'Who is the iconic Guild representative who briefs hunters in the early games (MH1–MHG)?',
    choices: ['The Caravaneer', 'The Guildmarm', 'The Navigator', 'The Guild Sweetheart'],
    correctAnswer: 'The Guild Sweetheart',
  },
  {
    question: 'Who is the chief strategist in Monster Hunter 4 Ultimate and leader of the expedition crew?',
    choices: ['The Caravaneer', 'The Ace Cadet', 'The Ace Commander', 'The Commander'],
    correctAnswer: 'The Commander',
  },
  {
    question: 'Which character in Monster Hunter Stories is your childhood friend and an aspiring Rider?',
    choices: ['Avinia', 'Kayna', 'Cheval', 'Navirou'],
    correctAnswer: 'Cheval',
  },
  {
    question: 'Who is the mysterious First Wyverian who guides the Hunter throughout MH4U?',
    choices: ['Zinie', 'The Elder', 'The Wyverian Artisan', 'The Guild-appointed Wyverian Chief'],
    correctAnswer: 'The Guild-appointed Wyverian Chief',
  },
  {
    question: 'Who is the iconic, slightly eccentric researcher obsessed with Elder Dragons in World/Iceborne?',
    choices: ['The Tracker', 'The Third Fleet Master', 'The Field Team Leader', 'The Seeker'],
    correctAnswer: 'The Seeker',
  },
  {
    question: 'Which legendary blacksmith appears across multiple games and is known for forging relic-tier gear?',
    choices: ['The Moofy Smith', 'The Master Smith', 'The Wyverian Artisan', 'The Caravan Smith'],
    correctAnswer: 'The Wyverian Artisan',
  },
  {
    question: 'Who leads the reconnaissance efforts and mobile camp operations in Monster Hunter Rise?',
    choices: ['Minoto', 'Hinoa', 'Elder Fugen', 'Guild Master Hojo'],
    correctAnswer: 'Guild Master Hojo',
  },
  {
    question: 'In the Frontier continuity, who is the enigmatic figure associated with high-ranking Guild authority and advanced weapon trials?',
    choices: ['Diva', 'Berukyurosu', 'Barass', 'The White Gale Commander'],
    correctAnswer: 'The White Gale Commander',
  },
  {
    question: 'Who serves as the Archivist in MH4U, providing insight into the origins of the Frenzy Virus and ancient lore?',
    choices: ['The Gramps of Val Habar', 'The Ace Lancer', 'The Aged Scholar', 'The Caravan Leader'],
    correctAnswer: 'The Aged Scholar',
  },
  {
    question: 'What is Poogie best known for in the Monster Hunter series?',
    choices: ['Fighting alongside the hunter', 'Boosting Palico abilities', 'Bringing good luck or bonus items when petted', 'Acting as a traveling merchant'],
    correctAnswer: 'Bringing good luck or bonus items when petted',
  },
  {
    question: 'What special condition must be met for Poogie to successfully find hidden items in various hubs?',
    choices: ['Feed it a rare mushroom', 'Carry it to specific spots after petting it correctly', 'Give it a custom outfit', 'Let it follow you into hunts'],
    correctAnswer: 'Carry it to specific spots after petting it correctly',
  },
  {
    question: 'What is Poogie best known for in the Monster Hunter series?',
    choices: ['Fighting alongside the hunter', 'Boosting Palico abilities', 'Bringing good luck or bonus items when petted', 'Acting as a traveling merchant'],
    correctAnswer: 'Bringing good luck or bonus items when petted',
  },
  {
    question: 'What is the name of the Wudwud who lives in the Iceshard Cliffs?',
    choices: ['Roev', 'Plumpeach', 'Alma', 'Rove'],
    correctAnswer: 'Rove',
  },
  {
    question: 'What is the description of the skill "Rath-from-Above"?',
    choices: ['Follow up attack after vaulting with Insect Glaive', 'Follow up attack after a Charged Chop with Sword and Shield', 'Your Palico mounts the monster after jumping on a trampoline', 'Your Palico gets into a hot air balloon to shoot a monster'],
    correctAnswer: 'Your Palico gets into a hot air balloon to shoot a monster',
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
var userSuccess = 0;
var userFail = 0;

function startGame() {
  startBtnEl.addEventListener('click', function () {
    loadQuestion();
    startTimer();
    startPageEl.setAttribute('class', 'hide-content');
    questionsAndAnswersEl.setAttribute('class', 'grid');
  });
  initializeQuizListeners();
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

function initializeQuizListeners() {
  questionsAndAnswersEl.addEventListener('click', handleAnswerClick);
}

function handleAnswerClick(event) {
  if (!event.target.matches('button')) {
    return;
  }

  answerAEl.disabled = true;
  answerBEl.disabled = true;
  answerCEl.disabled = true;
  answerDEl.disabled = true;

  var element = event.target;

  if (element.textContent === currentQuestion.correctAnswer) {
    correctWrongContainerEl.setAttribute('class', 'grid-el');
    correctWrongImg01El.setAttribute('src', 'assets/images/HappyFelyne.png');
    correctWrongImg02El.setAttribute('src', 'assets/images/HappyFelyne.png');
    correctWrongEl.textContent = 'CORRECT!';
    questionCount++;
    userSuccess++;
  } else {
    correctWrongContainerEl.setAttribute('class', 'grid-el');
    correctWrongImg01El.setAttribute('src', 'assets/images/KOdFelyne1.png');
    correctWrongImg02El.setAttribute('src', 'assets/images/KOdFelyne1.png');
    correctWrongEl.textContent = 'WRONG!';
    userFail++;
    timeLeft -= 10;
    timerEl.textContent = timeLeft;
  }

  setTimeout(function () {
    correctWrongContainerEl.setAttribute('class', 'hide-content');
    endGame();
    loadQuestion();
    answerAEl.disabled = false;
    answerBEl.disabled = false;
    answerCEl.disabled = false;
    answerDEl.disabled = false;
  }, 750);
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

function handleScoreSubmission() {
  scoreFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameValue = nameInputEl.value;
    if (nameValue === '') {
      console.log(nameValue);
      errorMsgEl.setAttribute('style', 'visibility: visible;');
    } else {
      localStorage.setItem('answeredCorrectly', userSuccess);
      localStorage.setItem('answeredIncorrectly', userFail);
      localStorage.setItem('userName', nameValue);
      renderLastScore();
      nameEntryEl.setAttribute('class', 'hide-content');
      scoreBoardEl.setAttribute('class', 'flexbox');
      playAgain();
      nameInputEl.value = '';
    }
  });
}

function renderLastScore() {
  var answeredCorrectly = localStorage.getItem('answeredCorrectly');
  var answeredIncorrectly = localStorage.getItem('answeredIncorrectly');
  var lastUserName = localStorage.getItem('userName');
  var newScore = document.createElement('li');
  newScore.textContent = lastUserName + ' | ' + answeredCorrectly + ' correct | ' + answeredIncorrectly + ' wrong';
  scoreListEl.appendChild(newScore);
}

function endGame() {
  if (timeLeft <= 0) {
    questionsAndAnswersEl.setAttribute('class', 'hide-content');
    nameEntryEl.setAttribute('class', 'flexbox');
  }
}

function resetGame() {
  // !!!! REMOVE BEFORE LAUNCHING
  // scoreListEl.innerHTML = '';
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
    {
      question: 'What item is traditionally used to capture a monster?',
      choices: ['Farcaster', 'Pitfall Trap', 'Shock Trap + Tranq Bombs', 'Screamer Pod'],
      correctAnswer: 'Shock Trap + Tranq Bombs',
    },
    {
      question: 'Which monster is the female counterpart to Rathalos?',
      choices: ['Pink Rathalos', 'Rathian', 'Seregios', 'Legiana'],
      correctAnswer: 'Rathian',
    },
    {
      question: 'In Monster Hunter Rise, what village serves as the player’s home hub?',
      choices: ['Dundorma', 'Astera', 'Kokoto', 'Kamura Village'],
      correctAnswer: 'Kamura Village',
    },
    {
      question: 'What makes Nargacuga particularly threatening?',
      choices: ['Fire breath', 'Paralyzing tail spines', 'Extreme speed and agility', 'Ability to fly for long periods'],
      correctAnswer: 'Extreme speed and agility',
    },
    {
      question: 'Which monster can change weapon types in Monster Hunter Stories?',
      choices: ['Yian Kut-Ku', 'Mizutsune', 'Valstrax', 'Glavenus'],
      correctAnswer: 'Glavenus',
    },
    {
      question: 'Which monster is known for using bubbles as part of its combat style?',
      choices: ['Shogun Ceanataur', 'Mizutsune', 'Tetranadon', 'Ludroth'],
      correctAnswer: 'Mizutsune',
    },
    {
      question: 'What special mechanic did Generations/Generations Ultimate introduce?',
      choices: ['Kinsects', 'Wirebugs', 'Hunter Arts & Hunting Styles', 'Slinger'],
      correctAnswer: 'Hunter Arts & Hunting Styles',
    },
    {
      question: 'What material is known as the “Living proof of a hunter’s bravery”?',
      choices: ['Elder Dragon Blood', 'Wyvern Gem', 'Mantle', 'Plate'],
      correctAnswer: 'Plate',
    },
    {
      question: 'What is the evolved form of Xeno’Jiiva?',
      choices: ['Gogmazios', 'Safi’Jiiva', 'Dire Miralis', 'Ruiner Nergigante'],
      correctAnswer: 'Safi’Jiiva',
    },
    {
      question: 'What unusual trait does Khezu have compared to most wyverns?',
      choices: ['No legs', 'No eyes', 'Regrowable limbs', 'Photosynthesis'],
      correctAnswer: 'No eyes',
    },
    {
      question: 'Which Frontier monster is known as the ‘White Saint’?',
      choices: ['Espinas', 'Disufiroa', 'Khezu', 'Kuarusepusu'],
      correctAnswer: 'Disufiroa',
    },
    {
      question: 'Which monster was originally exclusive as a Deviant variant in MHGU?',
      choices: ['Dreadking Rathalos', 'Thunderlord Zinogre', 'Soulseer Mizutsune', 'Silverwind Nargacuga'],
      correctAnswer: 'Dreadking Rathalos',
    },
    {
      question: 'What is the ecological role of the Elder Dragon Nakarkos in MH Generations?',
      choices: ['Creates volcanic islands', 'Restores coral reefs', 'Mimics skeletons and devours the dead', 'Controls local weather'],
      correctAnswer: 'Mimics skeletons and devours the dead',
    },
    {
      question: 'Which Elder Dragon is known to “terraform” its environment with crystal',
      choices: ['Shagaru Magala', 'Teostra', 'Daora', 'Xeno’Jiiva'],
      correctAnswer: 'Xeno’Jiiva',
    },
    {
      question: 'Why does Amatsu’s arena appear calm before the fight begins?',
      choices: ['It creates a vacuum of still air before unleashing storms', 'It freezes time', 'It suppresses wind currents', 'It feeds on ambient bioenergy'],
      correctAnswer: 'It creates a vacuum of still air before unleashing storms',
    },
    {
      question: 'What is the true nature of Shagaru Magala in relation to Gore Magala?',
      choices: ['Its offspring', 'A separate species', 'A Gore Magala that reached maturity', 'A symbiotic parasite'],
      correctAnswer: 'A Gore Magala that reached maturity',
    },
    {
      question: 'What is Espinas most known for in Frontier before it wakes?',
      choices: ['Playing dead', 'Being unusually passive', 'Being extremely aggressive', 'Scream-based one-shots'],
      correctAnswer: 'Being unusually passive',
    },
    {
      question: 'In Monster Hunter lore, what is the term for the “cycle” that Elder Dragons are believed to maintain?',
      choices: ['The Elder Circuit', 'The Bio-Loop', 'The Balance of Life', 'The Age of Wyverns'],
      correctAnswer: 'The Balance of Life',
    },
    {
      question: 'Which Elder Dragon is rumored to predate civilization itself and is tied to the concept of “the beginning”?',
      choices: ['Nakarkos', 'Zorah Magdaros', 'Fatalis', 'Shara Ishvalda'],
      correctAnswer: 'Shara Ishvalda',
    },
    {
      question: 'What is Nergigante’s ecological purpose according to the Research Commission?',
      choices: ['Protect the Everstream', 'Regulate Elder Dragon populations by hunting them', 'Stabilize magnetic fields', 'Spread bioenergy'],
      correctAnswer: 'Regulate Elder Dragon populations by hunting them',
    },
    {
      question: 'What ancient organization is said to have chronicled the earliest Elder Dragon encounters?',
      choices: ['The Scholars of Dundorma', 'The First Wyverians', 'The Sapphire Research Guild', 'The Chrono-Casters'],
      correctAnswer: 'The First Wyverians',
    },
    {
      question: 'Why are the First Wyverians considered crucial to the Guild’s foundation?',
      choices: ['They forged the original Guild Blade', 'They established the first hunter ranks', 'They possess vast ancestral knowledge and guided humanity', 'They control the Elder Dragon Council'],
      correctAnswer: 'They possess vast ancestral knowledge and guided humanity',
    },
    {
      question: 'What monster is theorized to have influenced the ancient legend of a world-ending flame dragon?',
      choices: ['Kushala Daora', 'Nakarkos', 'Alatreon', 'Fatalis'],
      correctAnswer: 'Fatalis',
    },
    {
      question: 'Which monster in Frontier is known for shifting between multiple elemental states mid-hunt?',
      choices: ['Kuarusepusu', 'Disufiroa', 'Rukodiora', 'Dyuragaua'],
      correctAnswer: 'Rukodiora',
    },
    {
      question: 'What is the suspected cause of the Frenzied Virus in 4U’s lore?',
      choices: ['Alatreon’s bioenergy', 'Shagaru’s pheromones', 'Gore’s parasitic mutation', 'Wylk crystals'],
      correctAnswer: 'Gore’s parasitic mutation',
    },
    {
      question: 'What is the “ancient prophecy” surrounding the Guiding Lands in Iceborne?',
      choices: ['It would collapse into the Everstream', 'Its ecosystems would merge into a singular biome', 'A dragon god would awaken beneath it', 'Hunters would be forbidden from entering'],
      correctAnswer: 'Its ecosystems would merge into a singular biome',
    },
    {
      question: 'What is one major ecological effect of the “Fallow” phase of the region’s weather cycle?',
      choices: ['Monster migration increases', 'Elder Dragons hibernate', 'Water becomes toxic', 'Coral structures grow rapidly'],
      correctAnswer: 'Monster migration increases',
    },
    {
      question: 'Which monster serves as the flagship monster and main story catalyst in Monster Hunter Wilds?',
      choices: ['Jin Dahaad', 'Rey Dau', 'Arkveld', 'Poogie'],
      correctAnswer: 'Arkveld',
    },
    {
      question: 'What is the name of the new mount introduced in Wilds that lets hunters traverse terrain and switch weapons mid-hunt?',
      choices: ['Seikret', 'Palamute', 'Vespoid', 'Wudwud'],
      correctAnswer: 'Seikret',
    },
    {
      question: 'What new combat mechanic allows players in Wilds to guard an attack and then push back a monster, opening for a powerful follow-up?',
      choices: ['Rath-from-Above', 'Focus Mode', 'Offset Attack', 'Power Clash'],
      correctAnswer: 'Power Clash',
    },
    {
      question: 'What is the theorized origin of the oil-rich basins seen throughout the Wilds?',
      choices: ['Massive decayed Leviathans from a prehistoric era', 'Leftover sludge from ancient weapon tests', 'Stored “dragon fluids” from the Elder Crossing', 'A geothermal anomaly caused by Shara Ishvalda'],
      correctAnswer: 'Massive decayed Leviathans from a prehistoric era',
    },
    {
      question: 'What is the Research Commission’s current theory regarding the original purpose of Wylk Stones within ancient Wilds civilization?',
      choices: ['They were used to train Elder Dragons', 'They served as the ancient civiliazations main form of sustenance', 'They were a power source used by the ancient Wyverian civilization', 'They were used for communication across continents'],
      correctAnswer: 'They were a power source used by the ancient Wyverian civilization',
    },
    {
      question: 'Before Monster Hunter World, what key item did hunters need to throw at a monster to track its location on the map?',
      choices: ['Flash Bomb', 'Paint Bomb', 'Paintball', 'Sonic Tracker'],
      correctAnswer: 'Paintball',
    },
    {
      question: 'In what game was Nargacuga the flagship monster?',
      choices: ['Monster Hunter Freedom Unite', 'Monster Hunter Frontier G', 'Monster Hunter 4', 'Monster Hunter Freedom 2'],
      correctAnswer: 'Monster Hunter Freedom Unite',
    },
    {
      question: 'Who serves as your main handler and quest guide in Monster Hunter: World?',
      choices: ['The Fiver Bro', 'The Seeker', 'The Handler', 'The Meowscular Chef'],
      correctAnswer: 'The Handler',
    },
    {
      question: 'Who is the iconic Guild representative who briefs hunters in the early games (MH1–MHG)?',
      choices: ['The Caravaneer', 'The Guildmarm', 'The Navigator', 'The Guild Sweetheart'],
      correctAnswer: 'The Guild Sweetheart',
    },
    {
      question: 'Who is the chief strategist in Monster Hunter 4 Ultimate and leader of the expedition crew?',
      choices: ['The Caravaneer', 'The Ace Cadet', 'The Ace Commander', 'The Commander'],
      correctAnswer: 'The Commander',
    },
    {
      question: 'Which character in Monster Hunter Stories is your childhood friend and an aspiring Rider?',
      choices: ['Avinia', 'Kayna', 'Cheval', 'Navirou'],
      correctAnswer: 'Cheval',
    },
    {
      question: 'Who is the mysterious First Wyverian who guides the Hunter throughout MH4U?',
      choices: ['Zinie', 'The Elder', 'The Wyverian Artisan', 'The Guild-appointed Wyverian Chief'],
      correctAnswer: 'The Guild-appointed Wyverian Chief',
    },
    {
      question: 'Who is the iconic, slightly eccentric researcher obsessed with Elder Dragons in World/Iceborne?',
      choices: ['The Tracker', 'The Third Fleet Master', 'The Field Team Leader', 'The Seeker'],
      correctAnswer: 'The Seeker',
    },
    {
      question: 'Which legendary blacksmith appears across multiple games and is known for forging relic-tier gear?',
      choices: ['The Moofy Smith', 'The Master Smith', 'The Wyverian Artisan', 'The Caravan Smith'],
      correctAnswer: 'The Wyverian Artisan',
    },
    {
      question: 'Who leads the reconnaissance efforts and mobile camp operations in Monster Hunter Rise?',
      choices: ['Minoto', 'Hinoa', 'Elder Fugen', 'Guild Master Hojo'],
      correctAnswer: 'Guild Master Hojo',
    },
    {
      question: 'In the Frontier continuity, who is the enigmatic figure associated with high-ranking Guild authority and advanced weapon trials?',
      choices: ['Diva', 'Berukyurosu', 'Barass', 'The White Gale Commander'],
      correctAnswer: 'The White Gale Commander',
    },
    {
      question: 'Who serves as the Archivist in MH4U, providing insight into the origins of the Frenzy Virus and ancient lore?',
      choices: ['The Gramps of Val Habar', 'The Ace Lancer', 'The Aged Scholar', 'The Caravan Leader'],
      correctAnswer: 'The Aged Scholar',
    },
    {
      question: 'What is Poogie best known for in the Monster Hunter series?',
      choices: ['Fighting alongside the hunter', 'Boosting Palico abilities', 'Bringing good luck or bonus items when petted', 'Acting as a traveling merchant'],
      correctAnswer: 'Bringing good luck or bonus items when petted',
    },
    {
      question: 'What special condition must be met for Poogie to successfully find hidden items in various hubs?',
      choices: ['Feed it a rare mushroom', 'Carry it to specific spots after petting it correctly', 'Give it a custom outfit', 'Let it follow you into hunts'],
      correctAnswer: 'Carry it to specific spots after petting it correctly',
    },
    {
      question: 'What is Poogie best known for in the Monster Hunter series?',
      choices: ['Fighting alongside the hunter', 'Boosting Palico abilities', 'Bringing good luck or bonus items when petted', 'Acting as a traveling merchant'],
      correctAnswer: 'Bringing good luck or bonus items when petted',
    },
    {
      question: 'What is the name of the Wudwud who lives in the Iceshard Cliffs?',
      choices: ['Roev', 'Plumpeach', 'Alma', 'Rove'],
      correctAnswer: 'Rove',
    },
    {
      question: 'What is the description of the skill "Rath-from-Above"?',
      choices: ['Follow up attack after vaulting with Insect Glaive', 'Follow up attack after a Charged Chop with Sword and Shield', 'Your Palico mounts the monster after jumping on a trampoline', 'Your Palico gets into a hot air balloon to shoot a monster'],
      correctAnswer: 'Your Palico gets into a hot air balloon to shoot a monster',
    },
  ];
  userSuccess = 0;
  userFail = 0;
  timerEl.textContent = '120';
  scoreBoardEl.setAttribute('class', 'hide-content');
  nameEntryEl.setAttribute('class', 'hide-content');
  questionsAndAnswersEl.setAttribute('class', 'hide-content');
  startPageEl.setAttribute('class', 'flexbox');
}

function playAgain() {
  playAgainBtnEl.addEventListener('click', function () {
    resetGame();
  });
}

startGame();
handleScoreSubmission();
