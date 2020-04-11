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

function setLevelRound() {
    var level = 1;
    var round = 1;
    var score = 0;

    sessionStorage.setItem("level", level);
    sessionStorage.setItem("round", round);
    sessionStorage.setItem("score", score);

    document.getElementById("level").innerHTML = sessionStorage.getItem("level");
    document.getElementById("round").innerHTML = sessionStorage.getItem("round");
    document.getElementById("score").innerHTML = sessionStorage.getItem("score");
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