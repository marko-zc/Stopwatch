var seconds = 00;
var minutes = 00;
var hours = 00;
var startButton = document.querySelector("#btn-start");
var stopButton = document.querySelector("#btn-stop");
var resetButton = document.querySelector("#btn-reset");
var second = document.querySelector("#s");
var minute = document.querySelector("#m");
var hour = document.querySelector("#h");
var startTime;
var currentTime;
startButton.addEventListener("click", start);

function start () {
    // clearInterval();
    // setInterval(function () {
    //     seconds++;
    // }, 1000);
    
    // if (seconds < 9) {
    //     second.textContent = "0" + seconds;
    // } else {
    //     second.textContent = seconds;
    // }
    startTime = Date.now();
    
}
