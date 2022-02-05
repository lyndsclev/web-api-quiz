// variables 

var startBtnEl = document.querySelector("#startBtnEl");
var startCont = document.querySelector("#startCont");
var questCont = document.querySelector("#questCont");

var time = 60;
var timerEl = document.querySelector("#timerEl");
var timer;

// timer 

function clock () {
    time--; 
    timerEl.textContent = "TIME: " + time;
}

// start

function start () {

    // start timer

    timer - setInterval(clock, 1000);
    
    // remove start content

    startCont.remove();

    // question 1

    var questOne = document.createElement("p");
    questOne.textContent = "How many donuts are made in the US each year?";
    questCont.appendChild(questOne);

    var ansOneArr = ["Over 10 billion", "5", "100,000", "None of the above"];

    for (var i = 0; i < ansOneArr.length; i++) {
        var ansBtnOne = document.createElement("button")
        ansBtnOne.innerHTML = ansOneArr[i];
        ansBtnOne.id = "ansBtn";
        questCont.appendChild(ansBtnOne);
    };


    // question 2

    // question 3

    // question 4
}

startBtnEl.addEventListener('click', start);

// end quiz 

// --- 
// local storage
// save score
// high scores 
