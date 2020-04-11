const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);

let words = [];

function generateWords() {
    let leftWords = sourceData.slice(0);
    for (let i=0; i<21; i++) {
        let gen = words.push(leftWords[Math.floor(Math.random() * leftWords.length)]);
        leftWords = leftWords.filter( ( el ) => !words.includes( el ) );
    }
    console.log(words);
    console.log(leftWords);
}

function startGame() {
    setLevelRound();
    showFlashcards();
}

function setLevelRound() {
    let level = 1;
    let round = 1;
    let score = 0;

    sessionStorage.setItem("level", level);
    sessionStorage.setItem("round", round);
    sessionStorage.setItem("score", score);

    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
}

class FlashCards {
    constructor(words) {
        this.words = words;
        this.currentWordIndex = 0;
        this.level = parseInt(sessionStorage.getItem("level"));
        this.lastWordIndex = (this.level*2);
    }

    displayCurrentWord() {
    console.info(this.words[this.currentWordIndex]);
    return this.words[this.currentWordIndex];
    }

    incrementWordIndex() {
  	this.currentWordIndex = this.currentWordIndex + 1;
    }

}

function showFlashcards(){
    flashcard = new FlashCards(words);
    console.log(flashcard);
    document.getElementById("flashcard").style.display = "block";
    document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
}

function nextFlashCard(){
    if (flashcard.currentWordIndex < flashcard.lastWordIndex-1){
        flashcard.incrementWordIndex();
        document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
    } else {
        flashcard.incrementWordIndex();
        document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
        $("#nextWord").hide();
        $("#start").show();
    }
}