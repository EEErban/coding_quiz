const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text')
const progressText = document.querySelector('#question')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let avaiableQuestions = []

let questions = [
    {
         question: 'Who were the duo that founded Nike?',
         choice1: 'Harold Humphreys & Wallace Humphreys',
         choice2: 'Adolf Dassler & Rudolph Dassler',
         choice3: 'Bill Bowerman & Phil Knight',
         choice4: 'Joseph W. Foster & Jeff Foster',
         answer: Bill Bowerman & Phil Knight,

    },

    {
        question: 'When is Air Max day celebrated?',
        choice1: 'April 1st',
        choice2: 'March 26th',
        choice3: 'February 14th',
        choice4: 'November 5th',
        answer: March 26th,

   },

   {
        question: 'The Air Jordan 1s debuted in what year?',
        choice1: '1990',
        choice2: '1979',
        choice3: '2001',
        choice4: '1984',
        answer: 1984,

    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 3

startGame = () => {
    questionCounter = 0
    score = 0
    avaiableQuestions = [...questions]
    getNewQuestion ()
}

getNewQuestion = () => {
    if(avaiableQuestions.length === 0 )
}