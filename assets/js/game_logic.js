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

function showGameboard(){
    document.getElementById("callout").style.display = "none";
    document.getElementById("gameboardBackground").style.display = "block";
    document.getElementById("gameboard").style.display = "block";
    gameboard = new Gameboards();
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

function nextRoundGame() {
    clearGameboard();
    hideGameboard();
    clearWords();
    generateWords();
    showFlashcards();
}

function clearWords () {
    return words = [];
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
