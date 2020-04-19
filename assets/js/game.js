//----------------------------------------------------Get Data
let sourceData = [];

function areStringsEqual(string1, string2) {
    return string1.trim() == string2.trim();
}

async function getData(){
    const response = await fetch('assets/csv/verbsPastTense.csv');
    const data = await response.text();
    console.log(data);
    sourceData = data.split('\n');
}
getData();
console.log(sourceData);
//----------------------------------------------------/Get Data
//----------------------------------------------------Generate Word List
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
//----------------------------------------------------/Generate Word List
//----------------------------------------------------Start Game
function startGame() {
    setLevelRound();
    showFlashcards();
}
//----------------------------------------------------/Start Game
//----------------------------------------------------Manage Stats
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
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
    restartLevel();
    nextRoundGame();
}

function restartLevel(){
    let level = sessionStorage.getItem("level");
    console.log("Old Level:" + level);
    level = 1;
    console.log("New Level:" + level);
    sessionStorage.setItem("level", level);
    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
}

function levelUp() {
    let level = parseInt(sessionStorage.getItem("level"));
    console.log("Old Level:" + level);
    if (level == 10) {
        showRoundModal();
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
//----------------------------------------------------Manage Stats
//----------------------------------------------------Flashcard Object
class FlashCards {
    constructor() {
        this.words = words;
        this.currentWordIndex = 0;
        this.level = parseInt(sessionStorage.getItem("level"));
        this.lastWordIndex = (this.level*2);
        this.wordNumberFlashcard = this.currentWordIndex + 1;
        this.lastWordNumberFlashcard = this.lastWordIndex + 1;
    }

    displayCurrentWord() {
    console.info(flashcard.words[flashcard.currentWordIndex]);
    return flashcard.words[flashcard.currentWordIndex];
    }

    incrementWordIndex() {
  	flashcard.currentWordIndex = flashcard.currentWordIndex + 1;
    }

    wordNumberDisplay() {
    return this.wordNumberFlashcard = this.currentWordIndex + 1;
    }
    
    lastWordNumberDisplay() {
    return this.lastWordNumberFlashcard = this.lastWordIndex + 1;
    }
}
//----------------------------------------------------/Flashcard Object
//----------------------------------------------------Flashcard Logic
function showFlashcards(){
    flashcard = new FlashCards();
    console.log(flashcard);
    document.getElementById("flashcardModal").style.display = "block";
    document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
    document.getElementById("flashcardNum").innerHTML = flashcard.wordNumberDisplay() + "/" + flashcard.lastWordNumberDisplay();
}

function nextFlashCard(){
    if (flashcard.currentWordIndex < flashcard.lastWordIndex-1){
        flashcard.incrementWordIndex();
        document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
        document.getElementById("flashcardNum").innerHTML = flashcard.wordNumberDisplay() + "/" + flashcard.lastWordNumberDisplay();
    } else {
        flashcard.incrementWordIndex();
        document.getElementById("flashcard1").innerHTML = flashcard.displayCurrentWord();
        document.getElementById("flashcardNum").innerHTML = flashcard.wordNumberDisplay() + "/" + flashcard.lastWordNumberDisplay();
        $("#nextWord").hide();
        $("#start").show();
    }
}

function resetFlashcard(){
    $("#nextWord").show();
    $("#start").hide();
}
//----------------------------------------------------/Flashcard Logic
//----------------------------------------------------Gameboard Object
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
//----------------------------------------------------/Gameboard Object
//----------------------------------------------------Gameboard Logic
function showGameboard(){
    document.getElementById("callout").style.display = "none";
    document.getElementById("gameboardBackground").style.display = "block";
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
    gameboard.checkWord = (document.getElementById("text").value).toLowerCase();
    console.log(gameboard.checkWord);
    console.log(gameboard.currentAnswerWord());
    if (areStringsEqual(gameboard.checkWord, gameboard.currentAnswerWord()) == true) {
        console.log("That's correct!");
        let e = "span" + (gameboard.currentWordIndex + 1);
        document.getElementById(e).style.color = "black";
        document.getElementById(e).innerHTML = gameboard.checkWord + " " + "<i class='far fa-check-circle icon'></i>";
        scoreUp();
        clearText();
        if (gameboard.currentWordIndex == gameboard.lastWordIndex) {
            showLevelModal();
        } else {
            gameboard.incrementWordIndex();
        }
    } else {
        console.log("Incorrect!");
        let f = "span" + (gameboard.currentWordIndex + 1);
        document.getElementById(f).innerHTML = "______" + "<br>"+ " " + "Try again!";
        document.getElementById(f).style.color = "red";
    }
}

function clearGameboard(){
    for (let i = 0; i<= gameboard.lastWordIndex; i++) {
        let e = "";
        e += "span" + (i+1);
        console.log(e);
        document.getElementById(e).innerHTML = "______";
    } 
}

function hideGameboard() {
    document.getElementById("gameboard").style.display = "none";
}

function clearWords () {
    return words = [];
}

function clearText() {
    document.getElementById("text").value = "";
}
//----------------------------------------------------Gameboard Logic
//----------------------------------------------------General Game
function nextRoundGame() {
    clearGameboard();
    hideGameboard();
    clearWords();
    generateWords();
    showFlashcards();
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
//----------------------------------------------------/General Game
//----------------------------------------------------Modals
function openInstructions() {
  document.getElementById("instructionsModal").style.display = "block";
}

function closeInstructions() {
  document.getElementById("instructionsModal").style.display = "none";
}

function closeFlashcards() {
  document.getElementById("flashcardModal").style.display = "none";
}

function showLevelModal() {
    document.getElementById("levelModal").style.display = "block";
    let lvl = parseInt(sessionStorage.getItem("level"));
    let nextlvl = lvl + 1;
    let score = sessionStorage.getItem("score");
    document.getElementById("modalCurrentLevel").innerHTML = lvl;
    document.getElementById("modalCurrentScore").innerHTML = score;
    document.getElementById("modalNextLevel").innerHTML = nextlvl;
}

function closeLevelModal() {
  document.getElementById("levelModal").style.display = "none";
}

function showRoundModal() {
    document.getElementById("roundModal").style.display = "block";
    let rnd = parseInt(sessionStorage.getItem("round"));
    let nextrnd = rnd + 1;
    let score = sessionStorage.getItem("score");
    document.getElementById("modalCurrentRound").innerHTML = rnd;
    document.getElementById("rmodalCurrentScore").innerHTML = score;
    document.getElementById("modalNextRound").innerHTML = nextrnd;
}

function closeRoundModal() {
  document.getElementById("roundModal").style.display = "none";
}