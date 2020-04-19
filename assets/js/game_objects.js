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