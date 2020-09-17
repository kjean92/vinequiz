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

const store = {
    // Cheys
    questions: [
    {
        quote: 'Road work ahead? Uh, yeah...',
        answers: {
            1: "Why wouldn't it?",
            2: "That's what she said!",
            3: "I sure hope it does",
            4: "Lorem Ipsum Stuff"
        },
        correctAnswer: 3
    },
    {
        quote: 'How much money do you have? 69 cents...Oh! You know what that means',
        answers: {
            1: "😏",
            2: "I dont have enough money for chicken nuggets",
            3: "ya nasty & you need jesus",
            4: "Lorem Ipsum Stuff"
        },
        correctAnswer: 2
    },
    {
        quote: 'Hurricane Katrina? More like hurricane',
        answers: {
            1: "vanilla",
            2: "chinchilla",
            3: "gorilla! Rest in peace Harambe",
            4: "tortilla!"
        },
        correctAnswer: 4
    },
    {
        quote: 'What are you doing!? My eye brows! Thats a big @$$ mirror.',
        answers: {
            1: "I have big @$$ eyebrows!",
            2: "Dont judge me!",
            3: "You know im blind Harold!",
            4: "well you have a big @$$ @$$"
        },
        correctAnswer: 1
    },
    {
        quote: 'So basically wot i was finking was *gets punched* ah fack',
        answers: {
            1: "I cant believe you've done this",
            2: "Why would you do that?",
            3: "Inconceivable!",
            4: "You've just punched me!"
        },
        correctAnswer: 1
    },

    // Kaylenas Questions
    {
        quote: '"I wanna be a _________ , baby!"',
        answers: {
            1: "cowboy",
            2: "engineer",
            3: "Vine star",
            4: "astronaut",
        },
        correctAnswer: 1
    },
    {
        quote: '1st person: *shoots starter pistol* 2nd person: "This is why ________ "',
        answers: {
            1: "mom and dad got divorced!",
            2: "Tina left you!",
            3: "mom doesn't FUCKING love you!",
            4: "we can't have nice things!",
        },
        correctAnswer: 3
    },
    {
        quote: 'Student: "What if I want to have sex BEFORE I get married?" Teacher: "_______"',
        answers: {
            1: "You WILL get pregnant, and DIE.",
            2: "Well, I guess you'll have to be prepared to die.",
            3: "You'll make your grandmother cry.",
            4: "...you? Married? Lol",
        },
        correctAnswer: 2
    },
    {
        quote: 'Mother: "What did you do?!" Child: "I _____"',
        answers: {
            1: "stole the Declaration of Independence",
            2: "created a Quiz App",
            3: "found a dog! *cuts to a wild raccoon in a cage*",
            4: "shaved my eyebrows!",
        },
        correctAnswer: 4 
    },
    {
        quote: 'I love myself. Even though I look like ________, I still love myself.',
        answers: {
            1: "a bURRNT chicken nugget",
            2: "Lindsey Lohan in 2007",
            3: "a lopsided giraffe",
            4: "the first version of my Thinkful portfolio",
        },
        correctAnswer: 1
    },
    ],
    quizStarted: true,
    questionNumber: 0,
    score: 0,

}, 
function handleQuizApp(){
    show();
    generateStartPage();
    checkAnswers();
    nextQuestion();
    restartQuiz();
    finishQuiz();

}

$(handleQuizApp);
function show(state) {
    $('body').html(`${state}`);
}
// event handlers



function startQuiz() {
    $('body').on('click', '.start-button', function (event){
        event.preventDefault();
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
        event.preventDefault();
    })
}

function nextQuestion() {
    $('body').on('click', '.next-question', function (event) {
        event.preventDefault();
        generateQuestionPage();
    })
}

function getQuestions() {
    let number = store.questionNumber;
    let nextQuestion = store.questions[number];
    return nextQuestion;
}

function generateStartPage() {
    const template = `<h1>Do It for the Vine</h1>
    <button id='start-quiz' class='next-question'>Yee Yee</button>
    <button id='no-quiz' class='restart-quiz'>I ain't gon do it</button>`

    show(template);
}

function generateQuestionPage() {
    let questionNum = store.questionNumber;
    let question
    
}


