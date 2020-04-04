const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "oggled", "stretched"];
console.log(sourceData);


//Get first three words & remove from array
function getRandom() {
    var randWords = [];
    var leftWords = sourceData.slice(0);

    for (var i=0; i<3; i++) {
        var rand = leftWords[Math.floor(Math.random() * leftWords.length)];
        randWorks = randWords.push(rand);
        leftWords = leftWords.filter( ( el ) => !randWords.includes( el ) );
    }
    //console.log(randWords);
    console.log(leftWords);
    loadFlashcard(randWords);
}

//Displaying words on flashcard
function loadFlashcard(displayWords) {
    console.log(displayWords);
    var wordNum = 0;

    function loadWord() {
      
        if (wordNum == (displayWords.length-1)) {
            document.getElementById("flashcard").innerHTML = displayWords[wordNum];
            $("#nextWord").hide();
            $("#start").show();
        } else {
        document.getElementById("flashcard").innerHTML = displayWords[wordNum];
        ++wordNum;
        }
    }
    loadWord();

    document.getElementById("nextWord").addEventListener("click", function(e) {
        loadWord();
    });

}

// Start Gameboard function

// Inputting words function

// 

// Level function

// Round function