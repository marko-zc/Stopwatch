var startButton = document.querySelector("#btn-start");
var stopButton = document.querySelector("#btn-stop");
var resetButton = document.querySelector("#btn-reset");
var lapButton = document.querySelector("#btn-lap");
var lapList = document.querySelector("#laps");

var secondEl = document.querySelector("#s");
var minuteEl = document.querySelector("#m");
var hourEl = document.querySelector("#h");
var milisecondEl = document.querySelector("#ms");

const formatOptions = { minimumIntegerDigits: 2 };


var currentTime = 0;
render(milisecondEl, secondEl, minuteEl, hourEl);

var intervalID;

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", addLap);

stopButton.setAttribute("disabled", "true");


function start() {
    startButton.setAttribute("disabled", "true");
    stopButton.removeAttribute("disabled");
    intervalID = setInterval (
        function () {
            currentTime += 10;
            render(milisecondEl, secondEl, minuteEl, hourEl);
        }
        , 10
    )
}


function render(msElement, sElement, mElement, hElement) {
    const elapsedTime = new Date(currentTime);
    msElement.textContent = elapsedTime.getMilliseconds().toLocaleString('en-GB', { minimumIntegerDigits: 3 })
    sElement.textContent = elapsedTime.getSeconds().toLocaleString('en-GB', formatOptions)
    mElement.textContent = elapsedTime.getMinutes().toLocaleString('en-GB', formatOptions)
    hElement.textContent = (elapsedTime.getHours() + elapsedTime.getTimezoneOffset() / 60).toLocaleString('en-GB', formatOptions)
}

function stop() {
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled", "true");
    clearInterval(intervalID);
}

function reset() {
    currentTime = 0;
    render(secondEl, minuteEl, hourEl, milisecondEl);
    lapList.innerHTML="";
}

function addLap() {
    // stvori li
    const li = document.createElement("li");
    // append li
    lapList.appendChild(li);
    // stvori spanove
    const ms = document.createElement("span");
    const s = document.createElement("span");
    const m = document.createElement("span");
    const h = document.createElement("span");
    const colonSpan = document.createElement("span");
    colonSpan.innerText = ":";
    const dotSpan = document.createElement("span");
    dotSpan.innerText = ".";
    // append spanove
    li.appendChild(h);
    li.appendChild(colonSpan);
    li.appendChild(m);
    li.appendChild(colonSpan.cloneNode(true));
    li.appendChild(s);
    li.appendChild(dotSpan);
    li.appendChild(ms);

    // render sa spanovima
    render(ms, s, m, h);
}