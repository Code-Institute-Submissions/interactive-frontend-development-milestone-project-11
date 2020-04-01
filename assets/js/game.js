const sourceData = ["sliced", "searched", "jumped", "crashed", "creased", "dove", "ran", "danced", "booked", "threw", "needed", "sought", "forgot", "ignored"];
//console.log(sourceData);

document.getElementById("timer").append(" " + "Hello World!");
document.getElementById("random").innerHTML = Date();

var random2 = document.createElement("DIV");
random2.setAttribute("id", "random2");
document.body.appendChild(random2);

function getData() {
    setTimeout(() => {
        let output = '';
        sourceData.forEach((data) => {
            output += `<li>${data}</li>`;
        });
        document.getElementById("random2").innerHTML = output;
    }, 1000);
}

getData();