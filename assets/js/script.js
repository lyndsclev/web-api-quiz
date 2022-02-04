
var startCont = document.querySelector("#startCont");
var startBtnEl = document.querySelector("#startBtnEl");
var quizCont = document.querySelector("#quizCont");

// timer global variables 

var time = 75
var timerEl = document.querySelector("#timerEl");
var timer;

// questions array 

var questionsArr = [
    {
        question: "How many donuts are made in the US each year?", 
        answers: {
            a: "Over 10 billion",
            b: "5",
            c: "100,000",
            d: "None of the above"
        },
        correctAns: "a" 
    },
    {
        question: "How people living in America have the last name of DONUT or DOUGHNUT?", 
        answers: {
            a: "80",
            b: "10",
            c: "60,000",
            d: "None of the above"
        },
        correctAns: "b" 
    },
    {
        question: "Which US city has the most donut shops per person?", 
        answers: {
            a: "San Francisco",
            b: "Boston",
            c: "New York",
            d: "None of the above"
        },
        correctAns: "b" 
    },
    {
        question: "What did the Dutch used to call donuts?", 
        answers: {
            a: "Nun's Farts",
            b: "Bagels",
            c: "Olykoeks",
            d: "None of the above"
        },
        correctAns: "c" 
    },
];

// on start button click, start timer

function start () {
    timer = setInterval(clock, 1000);
    timerEl.textContent = time; 

    // hide start content

    startCont.className = "hide";

    // un-hide quiz content 

    quizCont.classList.remove("hide");

    // create quiz question text

    // create quiz buttons

    // loop through questions array 

}

startBtnEl.addEventListener('click', start);

function clock () {

    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        endQuiz();

    }
}

function endQuiz() {}


// end quiz by either: timer run out or answered all questions

// display score and ask user to enter initials to save score

// save score in local storage

// include button option to clear high score(s)

