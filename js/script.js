var request = new XMLHttpRequest;
request.open("GET", "./js/data.json", false);
request.send();

var data = JSON.parse(request.responseText);
console.log(request.responseText);

const points = document.getElementsByClassName("points");
const subject = document.getElementsByClassName("subject");
const average = document.getElementById("number");

let scores = new Array;
for (let i = 0; i < 4; i++) {
    scores.push(data[i]["score"]);
}
console.log(scores);

function avg(arr) {
    let s = 0;
    let i = 0;
    arr.forEach(n => {
        s += n;
        i++;
    });

    return Math.floor(s / i);
}


for (let i = 0; i < subject.length; i++) {
    points[i].innerHTML = data[i]["score"];
    subject[i].innerHTML = '<img src="' + data[i]["icon"] + '" alt=""></img>' + data[i]["category"];
}
average.innerHTML = avg(scores);
