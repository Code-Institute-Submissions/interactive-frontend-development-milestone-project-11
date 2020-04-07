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
    getRandom();
    return;
}

//Increase Level
function levelUp() {
    var level = sessionStorage.getItem("level");
    console.log("Old Level:" + level);
    level++;
    console.log("New Level:" + level);
    sessionStorage.setItem("level", level);
    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
    return;
}

//Increase Round
function roundUp() {
    var round = sessionStorage.getItem("round");
    console.log("Old Round:" + round);
    round++;
    console.log("New Round:" + round);
    sessionStorage.setItem("round", round);
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
    return;
}

//Increase Score
function scoreUp() {
    var oldScore = sessionStorage.getItem("score");
    console.log("Old Score:" + oldScore);
    var score = parseInt(oldScore) + 10;
    console.log("New Score:" + score);
    sessionStorage.setItem("score", score);
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
    return;
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
    return leftWords;
    return randWords;
}

// Show Flashcards
function showFlashcards() {
    document.getElementById("flashcard").style.display = "block";
    return;
}

//Displaying words on flashcard
function loadFlashcard(displayWords) {
    console.log(displayWords);
    var wordNum = 0;
    $("#nextWord").show();
    $("#start").hide();

    function loadFirstWord() {
        var wordNum = 0;
        console.log("wordNum for Loadfirst=" + wordNum);
        document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
        return;
    }
    loadFirstWord();

    function loadWord() {
        console.log(displayWords);
        if (wordNum == (displayWords.length-1)) {
            console.log("wordNum compared to length =" + wordNum);
            console.log("Length com to wordNum=" + displayWords.length);
            document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
            $("#nextWord").hide();
            $("#start").show();
            wordNum = 0;
            return;
        } else {
        console.log("Length=" + displayWords.length);
        document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
        console.log("Before iteration:" + displayWords[wordNum]);
        wordNum++;
        console.log("wordNum =" + wordNum);
        console.log("After iteration:" + displayWords[wordNum]);
        return;
        }
    }
    //loadWord();

    document.getElementById("nextWord").addEventListener("click", function(e) {
        loadWord();
        return;
    });

   startGameboard(displayWords);
   return;
}

// Show Gameboard function
function showGameboard() {
    document.getElementById("flashcard").style.display = "none";
    document.getElementById("gameboard").style.display = "block";
    return;
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
    return;
}

// Display Forms & Buttons
function displayFirstForm (displayWords) {
    $("#word1 > input").css("display", "inline");

    if($('#check-answer1')) {
    $('#check-answer1').click(function() {
    firstLogAndCheck(displayWords);
    return;
    });
    } else {
    console.log('clicking not working');
    return;
}
}

// Set variables for first input log
function firstLogAndCheck (displayWords) {
    var x = -1;
    var submitAns;
    logToArray(x, submitAns, displayWords);
    return;
}

// Log form input to array
function logToArray(x, submitAns, displayWords) {
    console.log("log to array after nextcheck x=" + x);
    x++;
    console.log(x);
    var e = "";
    e += "text" + (x+1);
    submitAns = document.getElementById(e).value;
    console.log(submitAns);
    console.log("logToAns x=" + x);
    checkAnswer(x, submitAns, displayWords);
    console.log("logToAnsAgain x=" + x);
    return;
    }

// Compare submitted word to answer
function checkAnswer(x, submitAns, displayWords) {
        //var submitArrayx = submitArray[x];
        var displayWordsx = displayWords[x];
        if (submitAns == displayWordsx) {
            console.log("checkAnswer x=" + x);
            console.log(submitAns);
            console.log(displayWordsx);
            console.log("Correct!");
            scoreUp();

            if (x < (displayWords.length-1)) {
                displayNextForm(x, submitAns, displayWords);
                console.log("After displayNextForm is triggered");
            } else {
                clearLastForm(x);
                hideGameboard();
                levelUp();
                //Checking 
                getRandom();
                //addToDisplayWords(displayWords);
                return;
            }
            
        } else {
           console.log("That is incorrect");
        return;}
        return;
}

// Display next form
function displayNextForm(x, submitAns, displayWords) {
    console.log("displayNextForm x=" + x);
    var f = "#" + "text" + (x+1);
    var b = "#" + "check-answer" + (x+1);
    //console.log(f);
    //console.log(b);
    $(f).css("display", "none");
    $(b).css("display", "none");
    var nextForm = "#" + "text" + (x+2);
    var nextCheckButton = "#" + "check-answer" + (x+2);
    //console.log(nextForm);
    console.log(nextCheckButton);
    $(nextForm).css("display", "inline");
    $(nextCheckButton).css("display", "inline");

    if($(nextCheckButton)) {
        $(nextCheckButton).click(function() {
            logToArray(x, submitAns, displayWords);
            console.log("nextCheckButton x=" +x);
            return;
        });
    } else {
        console.log('clicking not working');
        return;
    }
}

function clearLastForm(x) {
    console.log("clearLastForm x=" + x);
    var f = "#" + "text" + (x+1);
    var b = "#" + "check-answer" + (x+1);
    //console.log(f);
    //console.log(b);
    $(f).css("display", "none");
    $(b).css("display", "none");
    //clearFormEntries(x);
    return;
}

function clearFormEntries(x) {
    for (var i=1; i<=(x+1); i++){
        var f = "#" + "text" + i;
        document.getElementById(f).value = " ";
        return;
    }
}

function addToDisplayWords(displayWords) {
    var randWords = displayWords;
    var leftWords = sourceData.filter( ( el ) => !randWords.includes( el ) );

    for (var i=0; i<2; i++) {
        var rand = leftWords[Math.floor(Math.random() * leftWords.length)];
        randWorks = randWords.push(rand);
        leftWords = leftWords.filter( ( el ) => !randWords.includes( el ) );
    }
    console.log(leftWords);
    loadFlashcard(randWords);
    return;
}

function hideGameboard() {
    document.getElementById("gameboard").style.display = "none";
    showFlashcards();
    return;
}
/*
var oldNumOfWords = sessionStorage.getItem("numOfWords");
    console.log("Old numOfWords:" + oldNumOfWords);
    var numOfWords = parseInt(oldNumOfWords) + 2;
    sessionStorage.setItem("numOfWords", numOfWords);
    console.log("Old numOfWords:" + numOfWords);
    console.log("New numOfWords:" + numOfWords);
    */