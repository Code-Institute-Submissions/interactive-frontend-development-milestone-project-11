/*
let sourceData = [];

getData();
async function getData(){
    const response = await fetch('assets/csv/verbsPastTense.csv');
    const data = await response.text();
    console.log(data);
    const objects = data.split('\n');
    return sourceData = Object.values(objects); // ['b', 'c', 'a']
    
}
console.log(sourceData);*/

const sourceData = ["fractured", "framed","franchised","frazzled","freaked","freckled","froze","freshened","frittered","lapped",
"lapsed","larked","lashed","mended","mentored","mesmerized","peered","peeved","pegged","penalized","peppered","perched","metamorphosed",
"mewed","microfilmed","migrated","lasted","frizzed","frothed","fudged","guffawed","gurgled","gulped","guttered","habited",
"hackled","haggled","fueled", "sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", 
"sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", 
"collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);

let words = [];

function generateWords() {
    console.log(sourceData);
    let leftWords = sourceData.slice(0);
    for (let i=0; i<21; i++) {
        let gen = words.push(leftWords[Math.floor(Math.random() * leftWords.length)]);
        leftWords = leftWords.filter( ( el ) => !words.includes( el ) );
    }
    console.log(words);
    console.log(leftWords);
}

function switchButton(){
    document.getElementById("NewGame1").style.display = "none";
    document.getElementById("NewGame2").style.display = "block";
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

function roundUp() {
    let round = sessionStorage.getItem("round");
    console.log("Old Round:" + round);
    round++;
    console.log("New Round:" + round);
    sessionStorage.setItem("round", round);
    restartLevel();
    nextRoundGame();
}


function restartLevel(){
    let level = sessionStorage.getItem("level");
    console.log("Old Level:" + level);
    level = 0;
    console.log("New Level:" + level);
    sessionStorage.setItem("level", level);
}

function levelUp() {
    let level = parseInt(sessionStorage.getItem("level"));
    console.log("Old Level:" + level);
    if (level == 10) {
        roundUp();
    } else {
        level++;
        console.log("New Level:" + level);
        sessionStorage.setItem("level", level);
        document.getElementById("level").innerHTML = sessionStorage.getItem("level");
        clearGameboard();
        hideGameboard();
        showFlashcards();
    }
}

function scoreUp() {
    let oldScore = sessionStorage.getItem("score");
    console.log("Old Score:" + oldScore);
    let score = parseInt(oldScore) + 10;
    console.log("New Score:" + score);
    sessionStorage.setItem("score", score);
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
}

class FlashCards {
    constructor() {
        this.words = words;
        this.currentWordIndex = 0;
        this.level = parseInt(sessionStorage.getItem("level"));
        this.lastWordIndex = (this.level*2);
    }

    displayCurrentWord() {
    console.info(flashcard.words[flashcard.currentWordIndex]);
    return flashcard.words[flashcard.currentWordIndex];
    }

    incrementWordIndex() {
  	flashcard.currentWordIndex = flashcard.currentWordIndex + 1;
    }

}

function showFlashcards(){
    flashcard = new FlashCards();
    console.log(flashcard);
    document.getElementById("flashcard").style.display = "block";
    document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
    window.location.hash = "flashcard";
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

function resetFlashcard(){
    $("#nextWord").show();
    $("#start").hide();
}

class Gameboards {
    constructor() {
        this.checkWord = "temp_word";
        this.words = words;
        this.currentWordIndex = 0;
        this.level = parseInt(sessionStorage.getItem("level"));
        this.lastWordIndex = (this.level*2);
    }

    incrementWordIndex() {
  	    this.currentWordIndex = this.currentWordIndex + 1;
    }

    currentAnswerWord() {
        console.info(this.words[this.currentWordIndex]);
        return this.words[this.currentWordIndex];
    }

}

function showGameboard(){
    document.getElementById("flashcard").style.display = "none";
    document.getElementById("gameboard").style.display = "block";
    gameboard = new Gameboards();
}

function showSpaces(){
    for (let i = 0; i<= gameboard.lastWordIndex; i++) {
        let e = "";
        e += "word" + (i+1);
        console.log(e);
        document.getElementById(e).style.display = "block";
    } 
    focusTextField();
    waitingForEnterKey();
}

function focusTextField(){
    document.getElementById("text").focus();
}


function waitingForEnterKey(){
    let input = document.getElementById("text");
    input/addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            document.getElementById("check-answer").click();
        }
    });
}

function checkAnswer() {
    //console.log(document.getElementById(text1).value);
    gameboard.checkWord = (document.getElementById("text").value).toLowerCase();
    console.log(gameboard.checkWord);
    console.log(gameboard.currentAnswerWord());
    if (gameboard.checkWord == gameboard.currentAnswerWord()) {
        console.log("That's correct!");
        let e = "span" + (gameboard.currentWordIndex + 1);
        document.getElementById(e).innerHTML = gameboard.checkWord + " " + "<i class='far fa-check-circle icon'></i>";
        scoreUp();
        clearText();
        if (gameboard.currentWordIndex == gameboard.lastWordIndex) {
            levelUp();
        } else {
            gameboard.incrementWordIndex();
        }
    } else {
        console.log("Incorrect!");
        let f = "span" + (gameboard.currentWordIndex + 1);
        document.getElementById(f).innerHTML = "______________" + " " + "Try again!";
    }
}

function clearGameboard(){
    for (let i = 0; i<= gameboard.lastWordIndex; i++) {
        let e = "";
        e += "span" + (i+1);
        console.log(e);
        document.getElementById(e).innerHTML = "______________";
    } 
}

function hideGameboard() {
    document.getElementById("gameboard").style.display = "none";
}

function nextRoundGame() {

}

function clearText() {
    document.getElementById("text").value = "";
}

function restartGame(){
    clearText();
    setLevelRound();
    clearGameboard();
    hideGameboard();
    words = [];
    generateWords();
    showFlashcards();
}


// InstructionModal JS
var instructionsModal = document.getElementById("instructionsModal");

// Get the button that opens the modal
var playbtn = document.getElementById("playBtn");


// When the user clicks on the button, open the modal
playbtn.onclick = function() {
  instructionsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeInstructions() {
  instructionsModal.style.display = "none";
}
