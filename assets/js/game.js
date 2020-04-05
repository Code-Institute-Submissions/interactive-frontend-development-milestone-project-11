const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);


//Get first three words & remove from array
function getRandom() {
    var randWords = [];
    var leftWords = sourceData.slice(0);

    for (var i=0; i<3; i++) {
        var rand = leftWords[Math.floor(Math.random() * leftWords.length)];
        randWords = randWords.push(rand);
        leftWords = leftWords.filter( ( el ) => !randWords.includes( el ) );
    }
    //console.log(randWords);
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

    // document.getElementById("start").addEventListener("click", function(e) {
    //    showGameboard(displayWords);
    //});

}

// Show Gameboard function
function showGameboard() {
    document.getElementById("flashcard").style.display = "none";
    document.getElementById("gameboard").style.display = "block";
}

// Populating Gameboard
function startGameboard() {

}


// 

// Level function

// Round function