const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored"];

//var addedData = [];
//addedData = sourceData;

//addedData.push("Extra");

//console.log(addedData);

function randSel() {
  var randData = [];
  for (var i = 0; i < 3; i++) {
    var rand = sourceData[Math.floor(Math.random() * sourceData.length)];
    randData.push(rand);
  }
  console.log(randData);
}

randSel();