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

    }
]
