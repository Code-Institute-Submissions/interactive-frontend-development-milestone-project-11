const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored", "juggled", "thought", "felt", "caught", "rejoiced", "thrived", "dashed", "pranced", "slept", "fought", "crumbled", "collapsed", "treasured", "silenced", "rose", "assigned", "allotted", "collected", "met", "traded", "assumed", "dipped",
"tumbled", "oggled", "stretched"];
console.log(sourceData);

//Get first three words
function getRandom() {
    var randWords = [];
    var leftWords = sourceData.slice(0);

    for (var i=0; i<3; i++) {
        var rand = sourceData[Math.floor(Math.random() * sourceData.length)];
        randWords.push(rand);
    }
    console.log(randWords);
    leftWords = leftWords.filter( ( el ) => !randWords.includes( el ) );
    console.log(leftWords);
}