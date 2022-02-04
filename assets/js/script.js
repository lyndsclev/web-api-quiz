
var content = document.querySelector("#content");

// questions array 

var questions = [
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


// on page load, create start message and button 

function start () {
    var startTitle = document.createElement("h2")
    startTitle.textContent = "Welcome to the Donut Quiz!";
    content.appendChild(startTitle);

    var startMsg = document.createElement("p")
    startMsg.textContent = "Try to answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds! The quiz is over after you've answered all 5 questions or when the time runs out.";
    content.appendChild(startMsg);

    var startBtn = document.createElement("button");
    startBtn.className = "btns";
    startBtn.textContent = "START";
    content.appendChild(startBtn);

    // on start button click, start timer

    // on start button click, remove start content, begin questions 

    function ask () { 
        startTitle.remove();
        startMsg.remove();
        startBtn.remove();
    };

    // loop through questions 
    
    startBtn.addEventListener('click', ask);

};

window.addEventListener('load', start);



// on answer button click: display result, display next question, if answer is wrong, deduct 10 seconds from timer

// end quiz by either: timer run out or answered all questions

// display score and ask user to enter initials to save score

// save score in local storage

// include button option to clear high score(s)
