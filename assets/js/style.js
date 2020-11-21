const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreDiv = document.getElementById("scoreContainer");

var timerEl = document.getElementById('countdown')
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var playerScore = 100;
console.log

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// Questions and answers 
const questions = [
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function myFunction()', correct: true },
            { text: 'function = myFunction()  ', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script name="xxx.js">', correct: false }
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'The <body> section', correct: false },
            { text: 'Both the <head> section and the <body> section are correct  ', correct: true },
            { text: 'The <head> section', correct: false },
            { text: 'The <footer> section', correct: false }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<JavaScript>', correct: false },
            { text: '<scripts>', correct: false },
            { text: '<Java>', correct: false }
        ]
    }
]

function countdown() {
    var timeLeft = 2;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.innerText = timeLeft;
            timeLeft = timeLeft - 1
        }
        else if (timeLeft === 0) {
            clearInterval;
            timerEl.innerText = "";
            displayMessage()
        }
    }, 1000);
}

function displayMessage(message) {
    var message = prompt("Out of time, please enter your name.", "Enter Name");
    if (message != null)
        document.getElementById("prompt").innerHTML = 
        "Hello " + message + "! if you would like to try again press the retry button!";
}

startButton.onclick = countdown;