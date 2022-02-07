// variables 

var startBtnEl = document.querySelector("#startBtnEl");
var startCont = document.querySelector("#startCont");
var questCont = document.querySelector("#questCont");
var resCont = document.querySelector("#resCont");

var nextQuest = document.createElement("button");
nextQuest.id = "nextBtn";
nextQuest.textContent = "Next Question";

var score = 0; 

var time = 60;
var timerEl = document.querySelector("#timerEl");
var timer;

// timer 

function clock () {
    time--; 
    timerEl.textContent = "TIME: " + time;

    if (time <= 0) {
        endQuiz ();
    }
}

// start

function start () {

    // start timer

    timer = setInterval(clock, 1000);
    
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
        ansBtnOne.id = "ansBtnOne" + i;
        ansBtnOne.className = "ansBtn";
        questCont.appendChild(ansBtnOne);
        }
        
        document.querySelector("#ansBtnOne0").onclick = ansChoiceR;
        document.querySelector("#ansBtnOne1").onclick = ansChoiceW;
        document.querySelector("#ansBtnOne2").onclick = ansChoiceW;
        document.querySelector("#ansBtnOne3").onclick = ansChoiceW;

        
        function ansChoiceR () {
            var resAlertR = document.createElement("h2");
            resAlertR.textContent = "Correct!";
            resAlertR.id = "resAlert";
            resAlertR.style.color = "green";
            resCont.appendChild(resAlertR);
            questCont.innerHTML = "";          
            resCont.appendChild(nextQuest);

            score = score + 5; 
            console.log(score);


        }

        function ansChoiceW () {
            var resAlertW = document.createElement("h2");
            resAlertW.textContent = "Wrong!";
            resAlertW.id = "resAlert";
            resAlertW.style.color = "red";
            resCont.appendChild(resAlertW);
            questCont.innerHTML = "";
            resCont.appendChild(nextQuest);

            time = time - 10; 
            console.log(time);
        }   

        }


   





     

    // question 2

    // question 3

    // question 4

startBtnEl.addEventListener('click', start);

// end quiz

function endQuiz () {
    // stop timer 
    clearInterval(timer);
}

// --- 
// local storage
// save score
// high scores 
