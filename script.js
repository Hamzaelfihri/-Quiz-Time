// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const totalScoreSpan = document.getElementById("total-score");
const totalScoreResultSpan = document.getElementById("total-score-result");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const continueButton = document.getElementById("continue-btn");
const quitButton = document.getElementById("quit-btn");
const progressBar = document.getElementById("progress");

// Large Question Pool
const questionPool = [
  // Geography
  { question: "What is the capital of France?", answers: [{ text: "London", correct: false }, { text: "Berlin", correct: false }, { text: "Paris", correct: true }, { text: "Madrid", correct: false }] },
  { question: "Which is the longest river in the world?", answers: [{ text: "Amazon", correct: false }, { text: "Nile", correct: true }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
  { question: "What is the largest desert in the world?", answers: [{ text: "Sahara", correct: false }, { text: "Gobi", correct: false }, { text: "Antarctic", correct: true }, { text: "Kalahari", correct: false }] },
  { question: "Which country has the most deserts?", answers: [{ text: "Australia", correct: true }, { text: "India", correct: false }, { text: "USA", correct: false }, { text: "Brazil", correct: false }] },
  { question: "What is the smallest country by land area?", answers: [{ text: "Monaco", correct: false }, { text: "Vatican City", correct: true }, { text: "San Marino", correct: false }, { text: "Liechtenstein", correct: false }] },
  // Science
  { question: "Which planet is known as the Red Planet?", answers: [{ text: "Venus", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }, { text: "Saturn", correct: false }] },
  { question: "What is the chemical symbol for gold?", answers: [{ text: "Go", correct: false }, { text: "Gd", correct: false }, { text: "Au", correct: true }, { text: "Ag", correct: false }] },
  { question: "Which element has the atomic number 1?", answers: [{ text: "Helium", correct: false }, { text: "Hydrogen", correct: true }, { text: "Oxygen", correct: false }, { text: "Carbon", correct: false }] },
  { question: "What gas is most abundant in Earth's atmosphere?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: true }, { text: "Carbon Dioxide", correct: false }, { text: "Argon", correct: false }] },
  { question: "What is the speed of light in a vacuum?", answers: [{ text: "300,000 km/s", correct: true }, { text: "150,000 km/s", correct: false }, { text: "450,000 km/s", correct: false }, { text: "600,000 km/s", correct: false }] },
  // History
  { question: "Who was the first President of the United States?", answers: [{ text: "Abraham Lincoln", correct: false }, { text: "George Washington", correct: true }, { text: "Thomas Jefferson", correct: false }, { text: "John Adams", correct: false }] },
  { question: "In which year did World War II end?", answers: [{ text: "1943", correct: false }, { text: "1945", correct: true }, { text: "1947", correct: false }, { text: "1950", correct: false }] },
  { question: "Who discovered America in 1492?", answers: [{ text: "Vasco da Gama", correct: false }, { text: "Christopher Columbus", correct: true }, { text: "Ferdinand Magellan", correct: false }, { text: "Marco Polo", correct: false }] },
  { question: "Which ancient civilization built the pyramids?", answers: [{ text: "Mayan", correct: false }, { text: "Egyptian", correct: true }, { text: "Incan", correct: false }, { text: "Mesopotamian", correct: false }] },
  { question: "What year did the Titanic sink?", answers: [{ text: "1905", correct: false }, { text: "1912", correct: true }, { text: "1920", correct: false }, { text: "1930", correct: false }] },
  // Mathematics
  { question: "What is 2 + 2?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }, { text: "22", correct: false }] },
  { question: "What is the smallest prime number?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }, { text: "5", correct: false }] },
  { question: "What is the value of π (pi) to two decimal places?", answers: [{ text: "3.12", correct: false }, { text: "3.14", correct: true }, { text: "3.16", correct: false }, { text: "3.18", correct: false }] },
  { question: "What is 5 factorial (5!)?", answers: [{ text: "60", correct: false }, { text: "120", correct: true }, { text: "100", correct: false }, { text: "150", correct: false }] },
  { question: "What is the square root of 16?", answers: [{ text: "2", correct: false }, { text: "4", correct: true }, { text: "8", correct: false }, { text: "16", correct: false }] },
  // Literature
  { question: "Who wrote 'Romeo and Juliet'?", answers: [{ text: "Charles Dickens", correct: false }, { text: "William Shakespeare", correct: true }, { text: "Jane Austen", correct: false }, { text: "Mark Twain", correct: false }] },
  { question: "What is the name of the hobbit in 'The Lord of the Rings'?", answers: [{ text: "Gandalf", correct: false }, { text: "Frodo", correct: true }, { text: "Aragorn", correct: false }, { text: "Legolas", correct: false }] },
  { question: "Who wrote 'Pride and Prejudice'?", answers: [{ text: "Emily Brontë", correct: false }, { text: "Jane Austen", correct: true }, { text: "Charlotte Brontë", correct: false }, { text: "Virginia Woolf", correct: false }] },
  { question: "What is the title of George Orwell's dystopian novel?", answers: [{ text: "Animal Farm", correct: false }, { text: "1984", correct: true }, { text: "Brave New World", correct: false }, { text: "Fahrenheit 451", correct: false }] },
  { question: "Who is the author of 'The Great Gatsby'?", answers: [{ text: "Ernest Hemingway", correct: false }, { text: "F. Scott Fitzgerald", correct: true }, { text: "John Steinbeck", correct: false }, { text: "William Faulkner", correct: false }] },
  // Technology
  { question: "Which of these is NOT a programming language?", answers: [{ text: "Java", correct: false }, { text: "Python", correct: false }, { text: "Banana", correct: true }, { text: "JavaScript", correct: false }] },
  { question: "What does HTML stand for?", answers: [{ text: "Hyper Text Markup Language", correct: true }, { text: "High Text Machine Language", correct: false }, { text: "Hyperlink Text Model Language", correct: false }, { text: "Home Tool Markup Language", correct: false }] },
  { question: "Who is the founder of Microsoft?", answers: [{ text: "Steve Jobs", correct: false }, { text: "Bill Gates", correct: true }, { text: "Elon Musk", correct: false }, { text: "Mark Zuckerberg", correct: false }] },
  { question: "What does CPU stand for?", answers: [{ text: "Central Processing Unit", correct: true }, { text: "Computer Personal Unit", correct: false }, { text: "Control Power Unit", correct: false }, { text: "Core Processing Unit", correct: false }] },
  { question: "Which company developed the Android operating system?", answers: [{ text: "Apple", correct: false }, { text: "Google", correct: true }, { text: "Microsoft", correct: false }, { text: "Samsung", correct: false }] },
  // Art
  { question: "Who painted the Mona Lisa?", answers: [{ text: "Michelangelo", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Raphael", correct: false }, { text: "Donatello", correct: false }] },
  { question: "Which artist is known for 'Starry Night'?", answers: [{ text: "Claude Monet", correct: false }, { text: "Vincent van Gogh", correct: true }, { text: "Pablo Picasso", correct: false }, { text: "Edvard Munch", correct: false }] },
  { question: "What is the name of Michelangelo's famous statue?", answers: [{ text: "David", correct: true }, { text: "Pieta", correct: false }, { text: "Moses", correct: false }, { text: "Apollo", correct: false }] },
  { question: "Which movement is associated with Picasso's 'Guernica'?", answers: [{ text: "Impressionism", correct: false }, { text: "Cubism", correct: true }, { text: "Surrealism", correct: false }, { text: "Expressionism", correct: false }] },
  { question: "Who created 'The Scream'?", answers: [{ text: "Edvard Munch", correct: true }, { text: "Gustav Klimt", correct: false }, { text: "Henri Matisse", correct: false }, { text: "Paul Cézanne", correct: false }] },
  // Sports
  { question: "Which country won the FIFA World Cup in 2018?", answers: [{ text: "Brazil", correct: false }, { text: "Germany", correct: false }, { text: "France", correct: true }, { text: "Argentina", correct: false }] },
  { question: "Who holds the record for the most Olympic gold medals?", answers: [{ text: "Usain Bolt", correct: false }, { text: "Michael Phelps", correct: true }, { text: "Simone Biles", correct: false }, { text: "Carl Lewis", correct: false }] },
  { question: "In which sport is the term 'hole-in-one' used?", answers: [{ text: "Tennis", correct: false }, { text: "Golf", correct: true }, { text: "Cricket", correct: false }, { text: "Hockey", correct: false }] },
  { question: "Which city hosted the 2016 Summer Olympics?", answers: [{ text: "London", correct: false }, { text: "Rio de Janeiro", correct: true }, { text: "Tokyo", correct: false }, { text: "Beijing", correct: false }] },
  { question: "What is the national sport of Japan?", answers: [{ text: "Judo", correct: false }, { text: "Sumo Wrestling", correct: true }, { text: "Karate", correct: false }, { text: "Kendo", correct: false }] },
  // Music
  { question: "Which band released the album 'Abbey Road'?", answers: [{ text: "The Rolling Stones", correct: false }, { text: "The Beatles", correct: true }, { text: "The Who", correct: false }, { text: "Pink Floyd", correct: false }] },
  { question: "Who is known as the 'King of Pop'?", answers: [{ text: "Elvis Presley", correct: false }, { text: "Michael Jackson", correct: true }, { text: "Prince", correct: false }, { text: "David Bowie", correct: false }] },
  { question: "What instrument did Beethoven primarily compose for?", answers: [{ text: "Violin", correct: false }, { text: "Piano", correct: true }, { text: "Flute", correct: false }, { text: "Trumpet", correct: false }] },
  { question: "Which genre is associated with Bob Dylan?", answers: [{ text: "Jazz", correct: false }, { text: "Folk", correct: true }, { text: "Heavy Metal", correct: false }, { text: "Reggae", correct: false }] },
  { question: "Who performed the hit song 'Bohemian Rhapsody'?", answers: [{ text: "Queen", correct: true }, { text: "Led Zeppelin", correct: false }, { text: "Aerosmith", correct: false }, { text: "The Eagles", correct: false }] },
  // General Knowledge
  { question: "Which country is known as the Land of the Rising Sun?", answers: [{ text: "China", correct: false }, { text: "Japan", correct: true }, { text: "Korea", correct: false }, { text: "Thailand", correct: false }] },
  { question: "What is the largest ocean on Earth?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Arctic Ocean", correct: false }, { text: "Pacific Ocean", correct: true }] },
  { question: "What is the currency of Japan?", answers: [{ text: "Yuan", correct: false }, { text: "Yen", correct: true }, { text: "Won", correct: false }, { text: "Ringgit", correct: false }] },
  { question: "Which animal is known as the 'King of the Jungle'?", answers: [{ text: "Tiger", correct: false }, { text: "Lion", correct: true }, { text: "Elephant", correct: false }, { text: "Gorilla", correct: false }] },
  { question: "What is the tallest mountain in the world?", answers: [{ text: "K2", correct: false }, { text: "Everest", correct: true }, { text: "Kangchenjunga", correct: false }, { text: "Lhotse", correct: false }] },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let currentSet = [];
const questionsPerSet = 5;
let score = 0;
let totalScore = 0;
let answersDisabled = false;
let usedQuestionIndices = [];

// Initialize UI
totalQuestionsSpan.textContent = questionsPerSet;
maxScoreSpan.textContent = questionsPerSet;

// Event Listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
continueButton.addEventListener("click", continueQuiz);
quitButton.addEventListener("click", quitQuiz);

function startQuiz() {
  // Reset vars
  currentQuestionIndex = 0;
  score = 0;
  totalScore = 0;
  usedQuestionIndices = [];
  scoreSpan.textContent = 0;
  totalScoreSpan.textContent = 0;
  totalScoreResultSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  generateQuestionSet();
  showQuestion();
}

function generateQuestionSet() {
  currentSet = [];
  const availableIndices = questionPool
    .map((_, index) => index)
    .filter((index) => !usedQuestionIndices.includes(index));

  // If not enough questions, reset used indices
  if (availableIndices.length < questionsPerSet) {
    usedQuestionIndices = [];
    availableIndices.length = 0;
    questionPool.forEach((_, index) => availableIndices.push(index));
  }

  // Randomly select questionsPerSet questions
  for (let i = 0; i < questionsPerSet; i++) {
    if (availableIndices.length === 0) break;
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const questionIndex = availableIndices.splice(randomIndex, 1)[0];
    currentSet.push(questionPool[questionIndex]);
    usedQuestionIndices.push(questionIndex);
  }
}

function showQuestion() {
  // Reset state
  answersDisabled = false;

  const currentQuestion = currentSet[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / questionsPerSet) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsPerSet) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  totalScore += score;
  finalScoreSpan.textContent = score;
  totalScoreResultSpan.textContent = totalScore;
  totalScoreSpan.textContent = totalScore;

  const percentage = (score / questionsPerSet) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function continueQuiz() {
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  generateQuestionSet();
  showQuestion();
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}

function quitQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}