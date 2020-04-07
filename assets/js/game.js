const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);

var displayWords;

//Set level and round
function setLevelRound() {
    var level = 0;
    var round = 0;
    var score = 0;

    sessionStorage.setItem("level", level);
    sessionStorage.setItem("round", round);
    sessionStorage.setItem("score", score);

    document.getElementById("score").innerHTML = sessionStorage.getItem("score");

    levelUp();
    roundUp();
}

//Increase Level
function levelUp() {
    var level = sessionStorage.getItem("level");
    console.log("Old Level:" + level);
    level++;
    console.log("New Level:" + level);
    sessionStorage.setItem("level", level);
    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
}

//Increase Round
function roundUp() {
    var round = sessionStorage.getItem("round");
    console.log("Old Round:" + round);
    round++;
    console.log("New Round:" + round);
    sessionStorage.setItem("round", round);
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
}

//Increase Score
function scoreUp() {
    var oldScore = sessionStorage.getItem("score");
    console.log("Old Score:" + oldScore);
    var score = parseInt(oldScore) + 10;
    console.log("New Score:" + score);
    sessionStorage.setItem("score", score);
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
}


//Get first three words & remove from array
function getRandom() {
    var randWords = [];
    var leftWords = sourceData.slice(0);

    for (var i=0; i<3; i++) {
        var rand = leftWords[Math.floor(Math.random() * leftWords.length)];
        randWorks = randWords.push(rand);
        leftWords = leftWords.filter( ( el ) => !randWords.includes( el ) );
    }
    console.log(leftWords);
    loadFlashcard(randWords);
}

// Show Flashcards
function showGame() {
    document.getElementById("flashcard").style.display = "block";
}

//Displaying words on flashcard
function loadFlashcard(displayWords) {
    console.log(displayWords);
    var wordNum = 0;

    function loadWord() {
      
        if (wordNum == (displayWords.length-1)) {
            document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
            $("#nextWord").hide();
            $("#start").show();
        } else {
        document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
        ++wordNum;
        }
    }
    loadWord();

    document.getElementById("nextWord").addEventListener("click", function(e) {
        loadWord();
    });

   startGameboard(displayWords);
}

// Show Gameboard function
function showGameboard() {
    document.getElementById("flashcard").style.display = "none";
    document.getElementById("gameboard").style.display = "block";
}

//Displaying Words on Gameboard
// Only show the number of words in the array
// Use index number to get Id of element
function startGameboard (displayWords) {
    for (var i=0; i<displayWords.length; i++) {
        var e = "";
        e += "word" + (i+1);
        document.getElementById(e).style.display = "block";
    }
    displayFirstForm(displayWords);
}

// Display Forms & Buttons
function displayFirstForm (displayWords) {
    $("#word1 > input").css("display", "inline");

    if($('#check-answer1')) {
    $('#check-answer1').click(function() {
    firstLogAndCheck(displayWords);
    });
    } else {
    console.log('clicking not working');
}
}

function firstLogAndCheck (displayWords) {
    var x = -1;
    var submitArray = [];
    logToArray(x, submitArray, displayWords);
}

function logToArray(x, submitArray, displayWords) {
    x++;
    console.log(x);
    var e = "";
    e += "text" + (x+1);
    submitArray[x] = document.getElementById(e).value;
    console.log(submitArray);
    console.log("logToArray x=" + x);
    checkAnswer(x, submitArray, displayWords);
    console.log("logToArrayAgain x=" + x);
    }

function checkAnswer(x, submitArray, displayWords) {
        var submitArrayx = submitArray[x];
        var displayWordsx = displayWords[x];
        if (submitArrayx == displayWordsx) {
            console.log("checkAnswer x=" + x);
            console.log(submitArrayx);
            console.log(displayWordsx);
            console.log("Correct!");
            scoreUp();
            displayNextForm(x, submitArray, displayWords);
            console.log("After displayNextForm is triggered");
        } else {
           console.log("That is incorrect");
        }
}

function displayNextForm(x, submitArray, displayWords) {
    console.log("displayNextForm x=" + x);
    var f = "#" + "text" + (x+1);
    var b = "#" + "check-answer" + (x+1);
    console.log(f);
    console.log(b);
    $(f).css("display", "none");
    $(b).css("display", "none");
    var nextForm = "#" + "text" + (x+2);
    var nextButton = "#" + "check-answer" + (x+2);
    console.log(nextForm);
    console.log(nextButton);
    $(nextForm).css("display", "inline");
    $(nextButton).css("display", "inline");

    if($(nextButton)) {
        $(nextButton).click(function() {
            logToArray(x, submitArray, displayWords);
            console.log("nextButton x=" +x);
        });
    } else {
        console.log('clicking not working');
    }
}




/*
// Populating Gameboard with Word numbers
function startGameboard(displayWords) {
    console.log(displayWords);
    var e = "";
    for (var i=0; i<displayWords.length; i++) {
     e += "<div id='wordSpace" + i + "'>" + " " + (i+1) + ". " + "</div>";
     document.getElementById("gameboard").innerHTML = e;          
    }
    startForm(displayWords);
}

// Start first form
function startForm(displayWords) {
    var wordNum = 0;

    function loadForm() {
        var form = "";
        var btn = "";
        //if less than array length, generate the form and button
        if (wordNum < displayWords.length) {
             form += "<input type='text'>" + "Text" + "</input>";
             btn += "<input type='button' id='check-answer' value='Check'>" + "Text" + "</input>";
             ++wordNum;
        } else {
            alert("Something went wrong");
        }
    }
    loadForm();

    //document.getElementById("check-answer").addEventListener("click", function(e) {
     //   loadForm();
    //});
}
*/

// 

// Level function

// Round