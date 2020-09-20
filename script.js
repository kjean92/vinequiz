// Page opens to quiz app, with "Will you do it for the vine?" 
// Answer choices are: "yee yee" and "I ain't gon do it"
// Clicking "yee yee" starts the quiz
// "Question One" is at top of the screen
// The first question appears, and there are four answer choices. All boxes are the same color intially, but after selection, incorrect answers turn pink and the correct answer turns green
// The user's score appears at the top right, in a correct/total format
// A "next" button appears at the bottom of the screen
// This process repeats until all questions are answered
// After answering the final question, the user's total score appears, along with a reaction image that is determined by overall score.
// 0-3/10 will result in a crying reaction
// 4-7/10 is a judgey reaction
// 8-9/10 is an okay reaction
// 10/10 is a happy Gavin reaction

//  handle quiz app

// things to move forward
// 1. restart quiz doesn't work
// 2. take you back home or something
// 3. correct response should say good job    <-------Done
// 4. show a list of correct/incorrect number/question

const store = {
    // Cheys
    questions: [
    {
        question: 'Road work ahead? Uh, yeah...',
        answers: ["Why wouldn't it?", "That's what she said!", "I sure hope it does", "Sure Jan"
        ],
        correctAnswer: "I sure hope it does"
    },
    {
        question: 'How much money do you have? 69 cents...Oh! You know what that means',
        answers: [ "😏", "I dont have enough money for chicken nuggets", "ya nasty & you need jesus", "I need a sugar daddy"
        ],
        correctAnswer: "I dont have enough money for chicken nuggets"
    },
    // {
    //     question: 'Hurricane Katrina? More like hurricane',
    //     answers: ["vanilla", "chinchilla", "gorilla! Rest in peace Harambe", "tortilla!"
    //     ],
    //     correctAnswer: "tortilla!"
    // },
    // {
    //     question: 'What are you doing!? My eye brows! Thats a big @$$ mirror.',
    //     answers: ["I have big @$$ eyebrows!", "Dont judge me!", "You know im blind Harold!", "well you have a big @$$ @$$"
    //     ],
    //     correctAnswer: "I have big @$$ eyebrows!"
    // },
    // {
    //     question: 'So basically wot i was finking was *gets punched* ah fack',
    //     answers: ['I cant believe youve done this', "Why would you do that?", "Inconceivable!", "You've just punched me!"
    //     ],
    //     correctAnswer: 'I cant believe youve done this' 
    // },

    // Kaylenas Questions
    // {
    //     question: '"I wanna be a _________ , baby!"',
    //     answers: ["cowboy", "engineer", "Vine star", "astronaut"
    //     ],
    //     correctAnswer: "cowboy"
    // },
    // {
    //     question: '1st person: *shoots starter pistol* 2nd person: "This is why ________ "',
    //     answers: ["mom and dad got divorced!", "Tina left you!", "mom doesnt 🦆ING love you!", "we can't have nice things!"
    // ],
    //     correctAnswer: "mom doesnt 🦆ING love you!"
    // },
    // {
    //     question: 'Student: "What if I want to have sex BEFORE I get married?" Teacher: "_______"',
    //     answers: ["You WILL get pregnant, and DIE.", "Well, I guess youll have to be prepared to die.", "You'll make your grandmother cry.", "...you? Married? Lol"
    //     ],
    //     correctAnswer: "Well, I guess youll have to be prepared to die."
    // },
    // {
    //     question: 'Mother: "What did you do?!" Child: "I _____"',
    //     answers: ["stole the Declaration of Independence", "created a Quiz App", "found a dog! *cuts to a wild raccoon in a cage*", "shaved my eyebrows!"
    //     ],
    //     correctAnswer: "shaved my eyebrows!"
    // },
    // {
    //     question: 'I love myself. Even though I look like ________, I still love myself.',
    //     answers: ["a bURRNT chicken nugget", "Lindsey Lohan in 2007", "a lopsided giraffe", "the first version of my Thinkful portfolio"
    //     ],
    //     correctAnswer: "a bURRNT chicken nugget"
    // },
    ],
    quizStarted: true,
    questionNumber: 0,
    score: 0,

}; 

$(handleQuizApp);

function show(state) {
    $('body').html(`${state}`);
}

function render() {
    let html = '';

    if (store.quizStarted === false) {
        $('main').html(generateStartPage());
        return;
    } else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
        html = generateQuestionPage();
        html += nextQuestion();
        $('main').html(html);   
    } else {
    $('main').html(generateEndPage());
    }
}
// event handlers
function startQuiz() {
    $('body').on('click', '.start-quiz', function (event){
        nextQuestion()
        render();
    });
}

function finishQuiz() {
    $('body').on('click', '.finish-quiz', function (event){
        event.preventDefault();
        generateEndPage();
    });
}

function checkAnswers() {
    $('body').on('click', '.submit-answer', function (event){
        event.preventDefault();
        generateAnswerPage();
        
    });
}

function restartQuiz() {
    $('body').on('click', '.restart-quiz', function (event) {
        resetQuiz();
        render();
    })
}

function nextQuestion() {
    $('body').on('click', '.next-question', function (event) {
        render();
        
    })
}

function getQuestions() {
    let number = store.questionNumber;
    let nextQuestion = store.questions[number];
    return nextQuestion;
}

function generateStartPage() {
    const template = `<h1>Do It for the Vine</h1>
    <button id='start-quiz' class='start-quiz'>Yee Yee</button>
    <button id='no-quiz' class='no-quiz'>I ain't gon do it</button>`

    show(template);
}

function generateQuestionPage() {
    let questionNum = store.questionNumber;
    let question = getQuestions();
    let score = store.score;

    let template = `<form class='container'>
    <h2> Question ${questionNum + 1} out of 10</h2>
    <p>${question.question}</p>
    <ul>
        <li><input type='radio' value='${question.answers[0]}' name='quiz-question'/><label>${question.answers[0]}</label></li>
        <li><input type='radio' value='${question.answers[1]}' name='quiz-question'/><label>${question.answers[1]}</label></li>
        <li><input type='radio' value='${question.answers[2]}' name='quiz-question'/><label>${question.answers[2]}</label></li>
        <li><input type='radio' value='${question.answers[3]}' name='quiz-question'/><label>${question.answers[3]}</label></li>
        <li><button type='submit' class='submit-answer'>Submit Answer</button></li>
    </ul>

    <p>Score is ${score} out of ${store.questions.length} </p>

    </form>`

    show(template);
    
 }

 function generateAnswerPage() {
     let userAnswer = $('input[type=radio][name="quiz-question"]:checked').val();
     let question = getQuestions();
     let correctAnswer = question.correctAnswer;
     let score = store.score;
     let template;

     if (!userAnswer) {
        alert('Whoever didnt pick an answer...ya moms a h0e');
    } else {
        if (userAnswer !== correctAnswer) {
         store.questionNumber += 1;
         template = `<h2> Incorrect 😭 </h2>
         <p> The correct answer was ${correctAnswer}</p>`
     } else {
        store.score += 1;
        store.questionNumber += 1;
        template = `<h2> Correct 🥰</h2>`
     }

     if (store.questionNumber === store.questions.length) {
         template += "<button class='finish-quiz'> BYE Felicia </button>"
     } else {
         template += "<button class='next-question'> Next Question </button>"
     }

     show(template);
     
    }
 }

 function generateEndPage() {
     let score = store.score;
     let template = `<h1> A finished quiz! Thaaaaanksssss 🥑 </h1> 
     <p> You got a ${score} out of 10! 🌟</p>
     <button class='restart-quiz'> Restart Quiz </button>
     <button class='new-quiz'> Anotha One </button>`

     show(template);

 }

function resetQuiz(){
    $('body').on('click', '.restart-quiz', function(event) {
        store.quizStarted = false;
        store.questions.questionNumber = 0;
        store.score = 0;
    })
}

function handleQuizApp(){
    startQuiz();
    render();
    show();
    generateStartPage();
    checkAnswers();
    nextQuestion();
    restartQuiz();
    finishQuiz();
}
