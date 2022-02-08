// variables 

var startBtnEl = document.querySelector("#startBtnEl");
var startCont = document.querySelector("#startCont");
var questCont = document.querySelector("#questCont");
var resCont = document.querySelector("#resCont");
var endCont = document.querySelector("#resCont");

var nextQuest = document.createElement("button");
nextQuest.id = "nextBtn";
nextQuest.textContent = "NEXT QUESTION";

var yourScore = document.createElement("h2");
var score = 0; 
var saveScore = document.querySelector("#saveScore");
var saveP = document.querySelector("#saveP");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");

var time = 60;
var timerEl = document.querySelector("#timerEl");
var timer;

// timer 

function clock () {
    time--; 
    timerEl.textContent = "TIME: " + time;

    if (time <= 0) {

        questCont.innerHTML = "";
        resCont.innerHTNL = "";

        alert("Your timer has run out! The quiz has ended click OK see your score.");

        endQuiz ();
    }
};

// correct answer 

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
    console.log(time);
};

// wrong answer 

function ansChoiceW () {
   var resAlertW = document.createElement("h2");
    resAlertW.textContent = "Wrong!";
    resAlertW.id = "resAlert";
    resAlertW.style.color = "red";
    resCont.appendChild(resAlertW);
    questCont.innerHTML = "";
    resCont.appendChild(nextQuest);

    time = time - 10; 

    console.log(score);
    console.log(time);

};   

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

    var ansOneArr = ["Over 10 billion", "5", "100,000", "697,885"];

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

        nextQuest.onclick = questTwo;

};   

// question 2

function questTwo () {

    resCont.innerHTML = "";

    var questTwo = document.createElement("p");
    questTwo.textContent = "How many people with the last name of DOUGHNUT or DONUT are currently living in the US?";
    questCont.appendChild(questTwo);

    var ansTwoArr = ["19", "85", "300", "10"];

    for (var i = 0; i < ansTwoArr.length; i++) {
        var ansBtnTwo = document.createElement("button")
        ansBtnTwo.innerHTML = ansTwoArr[i];
        ansBtnTwo.id = "ansBtnTwo" + i;
        ansBtnTwo.className = "ansBtn";
        questCont.appendChild(ansBtnTwo);
        }

        document.querySelector("#ansBtnTwo0").onclick = ansChoiceW;
        document.querySelector("#ansBtnTwo1").onclick = ansChoiceW;
        document.querySelector("#ansBtnTwo2").onclick = ansChoiceW;
        document.querySelector("#ansBtnTwo3").onclick = ansChoiceR;

        nextQuest.onclick = questThree;

};

// question 3

function questThree () {
    
    resCont.innerHTML = "";

    var questThree = document.createElement("p");
    questThree.textContent = "Which US city has the most donut shops per person?";
    questCont.appendChild(questThree);

    var ansThreeArr = ["Los Angeles", "Boston", "New Orleans", "Seattle"];

    for (var i = 0; i < ansThreeArr.length; i++) {
        var ansBtnThree = document.createElement("button")
        ansBtnThree.innerHTML = ansThreeArr[i];
        ansBtnThree.id = "ansBtnThree" + i;
        ansBtnThree.className = "ansBtn";
        questCont.appendChild(ansBtnThree);
        }

        document.querySelector("#ansBtnThree0").onclick = ansChoiceW;
        document.querySelector("#ansBtnThree1").onclick = ansChoiceR;
        document.querySelector("#ansBtnThree2").onclick = ansChoiceW;
        document.querySelector("#ansBtnThree3").onclick = ansChoiceW;

        nextQuest.onclick = questFour;
};

// question 4

function questFour() {

    resCont.innerHTML = "";

    var questFour = document.createElement("p");
    questFour.textContent = "What did the Dutch originally call donuts?";
    questCont.appendChild(questFour);

    var ansFourArr = ["Olykoeks", "Nun's Farts", "Sweet Bagels", "Hoopties"];

    for (var i = 0; i < ansFourArr.length; i++) {
        var ansBtnFour = document.createElement("button")
        ansBtnFour.innerHTML = ansFourArr[i];
        ansBtnFour.id = "ansBtnFour" + i;
        ansBtnFour.className = "ansBtn";
        questCont.appendChild(ansBtnFour);
        }

        document.querySelector("#ansBtnFour0").onclick = ansChoiceR;
        document.querySelector("#ansBtnFour1").onclick = ansChoiceW;
        document.querySelector("#ansBtnFour2").onclick = ansChoiceW;
        document.querySelector("#ansBtnFour3").onclick = ansChoiceW;

        nextQuest.textContent = "THE QUIZ HAS ENDED! CLICK FOR RESULTS";
        nextQuest.onclick = endQuiz;

};

// end quiz

function endQuiz () {
    
    // stop and remove timer 

    clearInterval(timer);
    timerEl.innerHTML="";

    // clear res and button

    resCont.innerHTML = "";

    // display score

    yourScore.textContent = "You scored: " + score + "." + " Great Job!";
    yourScore.style.color = "purple";
    endCont.appendChild(yourScore);

    saveP.classList.remove("hide");
    initials.classList.remove("hide");
    submit.classList.remove("hide");
};

function storeScore () {
    
    // get value of input box

    var initialsInput = initials.value;

    // get existing scores from local storage or if not any set array to empty 

    var highScoresArr = JSON.parse(window.localStorage.getItem("highScoresArr")) || [];

    // create object with score and initials and push to highScoresArr

    var newHighScore = {
        initials: initialsInput,
        score: score   
    };

    highScoresArr.push(newHighScore);

    // save to localStorage

    window.localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr));

    saveP.className = "hide";
    initials.className = "hide";
    submit.className = "hide";

    yourScore.textContent = "Thanks for playing!";

}

submit.onclick = storeScore; 


startBtnEl.addEventListener('click', start);

