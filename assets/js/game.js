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
    var wordNum = -1;

//var questionNum = -1;
//var numCorrect = 0;

function loadWord() {
    ++wordNum;
    if (wordNum == displayWords.length) {
        $("#nextWord").hide();
        $("start").show();
    } else {
        document.getElementById("flashcard").innerHTML = displayWords[wordNum];
    }
}
loadWord();


document.getElementById("nextWord").addEventListener("click", function(e) {
        loadWord();
});
}

//Displaying words on flashcard
//function firstFlashcard(displayWords) {
  //  document.getElementById("flashcard").append(" " + displayWords[0]);
    //nextFlashcard(displayWords);
//}

//async function nextFlashcard(displayWords) {
  //  await $("#nextWord").click(function(){
    //    for (var i=; i<displayWords.length; i++) {
      //      document.getElementById("flashcard").remove(" " + displayWords[i-1])
        //    document.getElementById("flashcard").append(" " + displayWords[i])
         //  });
    

//}


  //  for (var i=0; i<displayWords.length; i++) {
    //    async function nextFlashcard() {

      //  await $("#nextWord").click(function(){
        //    document.getElementById("flashcard").remove(" " + displayWords[i-1])
          //  document.getElementById("flashcard").append(" " + displayWords[i-1])
            //});
        //}
        //if (i == (displayWords.length-1)) {
          //  $("#nextWord").hide();
            //$("start").show();
        //} else {
          //  $("#nextWord").show();
        //}

   // }
    //console.log(displayWords);
//}
