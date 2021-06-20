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
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct )
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText  = 'Restart' 
        startButton.classList.remove('hide')
       
    }
  

  //prevent multiclicking 
  document.getElementById('answer-buttons').classList.add('no-click'); 

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'After what event did the United States enter WW2 ?',
        answers: [
            {text: 'Invasion of Poland', correct: false},
            {text: '"The Blitz" bombing campaign', correct: false},
            {text: 'Bombing of Pearl Harbor', correct: true},
            {text: 'Invasion of France', correct: false},
        ]
       
    },
    {
    question: 'The three main partners in the Axis alliance during WW2 ?',
    answers: [
        {text: 'France, United Kingdom, United States', correct: false},
        {text: 'Ireland, United Kingdom, Brazil', correct: false},
        {text: 'Russia, Mexico, Canada', correct: false},
        {text: 'Germany, Italy, Japan', correct: true},
    ]
    },
    {
        question: 'What two countries were already involved in a military conflict before the beginning of World War II ?',
        answers: [
            {text: 'Japan & China', correct: true},
            {text: 'Japan & India', correct: false},
            {text: 'Germany & Poland', correct: false},
            {text: 'Germany & France', correct: false,}
        ]
        },
     {
            question: 'After World War II, Germany was divided into how many zones of occupation?',
            answers: [
                {text: '3', correct: false},
                {text: '2', correct: false},
                {text: '4', correct: true},
                {text: '12', correct: false,}
            ]
     },
     {
        question: 'What English code breaker created a machine that helped to decrypt Nazi messages?',
        answers: [
            {text: 'Charles Darwin', correct: false},
            {text: 'Alan Turing', correct: true},
            {text: 'Charles Babbage', correct: false},
            {text: 'Winston Churchill', correct: false},
        ]
        },
        
]