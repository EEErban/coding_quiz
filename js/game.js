const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
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
         answer: 'Bill Bowerman & Phil Knight',

    },

    {
        question: 'When is Air Max day celebrated?',
        choice1: 'April 1st',
        choice2: 'March 26th',
        choice3: 'February 14th',
        choice4: 'November 5th',
        answer: 'March 26th',

   },

   {
        question: 'The Air Jordan 1s debuted in what year?',
        choice1: '1990',
        choice2: '1979',
        choice3: '2001',
        choice4: '1984',
        answer: '1984',

    },

    {
        question: 'Carolyn Davidson the creator of the iconic swoosh logo was paid how much for the design?',
        choice1: '$35',
        choice2: '$5',
        choice3: '$1000',
        choice4: '$200',
        answer: '$35',

    },

    {
        question: 'What is the brands famous slogan?',
        choice1: 'Impossible is nothing',
        choice2: 'Just do it',
        choice3: 'Vorsprung durch technik',
        choice4: 'You never walk alone',
        answer: 'Just do it',

    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    avaiableQuestions = [...questions]
    getNewQuestion ()
}

getNewQuestion = () => {
    if(avaiableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)  {
        localStorage.getItem('mostRecentScore', score)

        return window.location.assign('/index.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    const questionIndex = Math.floor(Math.random() * avaiableQuestions.length)
    currentQuestion = avaiableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    avaiableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
