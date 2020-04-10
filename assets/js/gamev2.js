const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "stretched"];
console.log(sourceData);



function newGame(){
    var level = 0;
    var round = 1;
    var score = 0;

    sessionStorage.setItem("level", level);
    sessionStorage.setItem("round", round);
    sessionStorage.setItem("score", score);

    levelUp();
}

function levelUp(){
    
}