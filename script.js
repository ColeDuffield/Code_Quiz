function generateQuiz(quesitons, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //code will go here
    }

    function showResults(questions, quizContainer, resultsContainer) {
        //code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);


    // when user clicks submit, show results
    submitButton.onclick = function(){
        
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        question: "What is Cole's favorite color?",
        answers: {
            a: 'Red',
            b: 'Green',
            c: 'Blue',
            d: 'Yellow'
        },
        correctAnswer: 'c'
    },
    {
        question: "Where does Cole live?",
        answers: {
            a: 'Joplin, MO',
            b: 'Kansas City, MO',
            c: 'Lenexa, KS',
            d: 'Denver, CO',
        },
        correctAnswer: 'c'
    },
    {
        question: "Which anime is Cole's favorite?",
        answers: {
            a: 'Naruto',
            b: 'One Piece',
            c: 'My Hero Academia',
            d: 'Attack on Titan',
            e: 'Bleach',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which video game can Cole talk along-side?",
        answers: {
            a: 'Halo 3',
            b: 'Half-Life 3',
            c: 'Grand Theft Auto 6',
            d: 'Pokemon: LeafGreen',
        },
        correctAnswer: 'a',
    },
    {
        question: "What was Cole's first love?",
        answers: {
            a: 'Halo',
            b: 'an Ex',
            c: 'His old dog, Buddy',
            d: 'A P-47D Thunderbolt',
        },
        correctAnswer: 'c',
    },
]

function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){


        // first reset the list of answers
        answers = [];

        //for each available answer to this question...
        for(letter in questions[i].answers) {

            //...add an html radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                +'</label>'
            );
        }

        //add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resulstsContainer){

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for(var i=0; i<questions.length; i++){


        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        //if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }


    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
// In the line that says "// find selected answer", we used the || operator, which means "or" to basically say "Give us the selected answer OR if there's not one, then just give us an empty object." That way, trying to get the .value will give us undefined instead of causing and error. That way, the quiz won't break if someone skips a question.

// on submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
    