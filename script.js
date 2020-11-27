const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

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
    setNextQeustion()

}

function setNextQeustion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerTet = answer.text
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
    Array.from(answerButtonsElement.children).forEach(button =>  {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
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

const questions = [
    {
        question: "What is the world's most popular programming language?",
        answers: [
            {text: 'JavaScript', correct: true },
            {text: 'Whitespace', correct: false},
            {text: 'Jelly', correct: false},
            {text: 'Chef', correct: false}

        ]
    },
    {
        question: "JavaScript can change HTML content?",
        answers: [
            {text: 'True', correct: true},
            {text: 'False', correct: false}
        ]
    },
    {
        question: "What was the first major revision to JavaScript?",
        answers: [
            {text: 'ES5', correct: true},
            {text: 'SQL', correct: false},
            {text: 'PHP', correct: false},
            {text: 'ES6', correct: false}
        ]
    },
    {
        question: "Since 2016, new versions of JS are named by what?",
        answers: [
            {text: 'The person who created it', correct: false},
            {text: 'The year it was created', correct: true},
            {text: 'The time it was created', correct: false},
            {text: 'LMAO IDK', correct: false}

        ]
    }
]
    
    