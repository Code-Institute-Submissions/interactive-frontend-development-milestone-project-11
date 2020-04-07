const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);

/*
sessionStorage.setItem("wordsArray", JSON.stringify(sourceData));

var retrievedData = sessionStorage.getItem("wordsArray");
var sourceData2 = JSON.parse(retrievedData);
console.log(sourceData2);

alert(sourceData2.length);
*/



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

//Increase Level - NO FUNCTION
function levelUp() {
    var oldLevel = sessionStorage.getItem("level");
    console.log("Old Level:" + oldLevel);
    var level = parseInt(oldLevel) + 1;
    console.log("New Level:" + level);
    sessionStorage.setItem("level", level);
    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
    return;
}

//Increase Round  - NO FUNCTION
function roundUp() {
    var oldRound = sessionStorage.getItem("round");
    console.log("Old Round:" + oldRound);
    var round = parseInt(oldRound) + 1;
    console.log("New Round:" + round);
    sessionStorage.setItem("round", round);
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
    return;
}

//Increase Score - NO FUNCTION
function scoreUp() {
    var oldScore = sessionStorage.getItem("score");
    console.log("Old Score:" + oldScore);
    var score = parseInt(oldScore) + 10;
    console.log("New Score:" + score);
    sessionStorage.setItem("score", score);
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
    return;
}


//Get first three words & remove from array - LOADFLASHCARD
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
    sessionStorage.setItem("wordsArray", JSON.stringify(randWords));
    return;
}

// Show Flashcards
function showFlashcards() {
    document.getElementById("flashcard").style.display = "block";
    return;
}

//Displaying words on flashcard
function loadFlashcard() {
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
    var wordNum = 0;
    $("#nextWord").show();
    $("#start").hide();
    startGameboard(displayWords);

    function loadFirstWord() {
        var wordNum = 0;
        console.log("wordNum for Loadfirst=" + wordNum);
        document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
        sessionStorage.setItem("wordNum", wordNum);
    }
    loadFirstWord();
    return;

    
    //loadWord();

    /*document.getElementById("nextWord").addEventListener("click", function(e) {
        loadWord();
    });*/
}

function loadWord() {
        wordNum = sessionStorage.getItem("wordNum");
        var retrievedData = sessionStorage.getItem("wordsArray");
        var displayWords = JSON.parse(retrievedData);
        console.log(displayWords);
        
        if (wordNum == (displayWords.length-1)) {
            console.log("wordNum compared to length =" + wordNum);
            console.log("Length com to wordNum=" + displayWords.length);
            document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
            $("#nextWord").hide();
            $("#start").show();
            wordNum = 0;
            sessionStorage.setItem("wordNum", wordNum);
            return;
        } else {
        console.log("Length=" + displayWords.length);
        document.getElementById("flashcard1").innerHTML = displayWords[wordNum];
        console.log("Before iteration:" + displayWords[wordNum]);
        wordNum++;
        sessionStorage.setItem("wordNum", wordNum);
        console.log("wordNum =" + wordNum);
        console.log("After iteration:" + displayWords[wordNum]);
        return;
        }
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
    console.log(displayWords);
    for (var i=0; i<displayWords.length; i++) {
        var e = "";
        e += "word" + (i+1);
        document.getElementById(e).style.display = "block";
    }
    displayFirstForm();
    return;
}

// Display Forms & Buttons
function displayFirstForm () {
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
    $("#word1 > input").css("display", "inline");

    if($('#check-answer1')) {
    $('#check-answer1').click(function() {
    firstLogAndCheck(displayWords);
    });
    } else {
    console.log('clicking not working');
}
}

// Set variables for first input log
function firstLogAndCheck () {
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
    var x = -1;
    sessionStorage.setItem("x", x);
    logToArray(x);
    return;
}

// Log form input to array
function logToArray() {
    
    var x = sessionStorage.getItem("x");
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
    console.log("log to array after nextcheck x=" + x);
    x++;
    console.log(x);
    var e = "";
    e += "text" + (x+1);
    submitAns = document.getElementById(e).value;
    sessionStorage.setItem("submitAns", submitAns);
    console.log(submitAns);
    console.log("logToAns x=" + x);
    sessionStorage.setItem("x", x);
    console.log("logToAnsAgain x=" + x);
    return;
    }

// Compare submitted word to answer
function checkAnswer() {
    
    var x = sessionStorage.getItem("x");
    var submitAns = sessionStorage.getItem("submitAns");
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
        //var submitArrayx = submitArray[x];
        var displayWordsx = displayWords[x];
        if (submitAns == displayWordsx) {
            console.log("checkAnswer x=" + x);
            console.log(submitAns);
            console.log(displayWordsx);
            console.log("Correct!");
            scoreUp();
            if (x < (displayWords.length-1)) {
                displayNextForm();
                sessionStorage.setItem("x", x);
                console.log("After displayNextForm is triggered");
                return;
            } else {
                sessionStorage.setItem("x", x);
                clearLastForm();
                hideGameboard();
                levelUp();
                addToDisplayWords();
                return;
            }
            
        } else {
           console.log("That is incorrect");
           return;
        }
}

// Display next form
function displayNextForm() {
    var x = sessionStorage.getItem("x");
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords);
    console.log("displayNextForm x=" + x);
    var f = "#" + "text" + (x+1);
    var b = "#" + "check-answer" + (x+1);
    console.log(f);
    console.log(b);
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
            sessionStorage.setItem("x", x);
            logToArray();
            console.log("nextCheckButton x=" +x);
        });
    } else {
        console.log('clicking not working');
    }
    return;
}

function clearLastForm() {

    var x = sessionStorage.getItem("x");
    console.log("clearLastForm x=" + x);
    var f = "#" + "text" + (x+1);
    var b = "#" + "check-answer" + (x+1);
    //console.log(f);
    //console.log(b);
    $(f).css("display", "none");
    $(b).css("display", "none");
    //clearFormEntries(x);
}

function clearFormEntries() {
    var x = sessionStorage.getItem("x");
    for (var i=1; i<=(x+1); i++){
        var f = "#" + "text" + i;
        document.getElementById(f).value = " ";
    }
}

function addToDisplayWords() {
    var retrievedData = sessionStorage.getItem("wordsArray");
    var displayWords = JSON.parse(retrievedData);
    console.log(displayWords); 

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