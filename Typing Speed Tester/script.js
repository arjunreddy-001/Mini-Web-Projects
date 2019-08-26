const TESTWRAPPER = document.querySelector(".test-wrapper");
const TESTAREA = document.querySelector("#test-area");
const ORIGINTEXT = document.querySelector("#origin-text p").innerHTML;
const RESETBUTTON = document.querySelector("#reset");
const TIMER = document.querySelector(".timer");

var timer = [0,0,0,0]; // mins, secs, 100ths of sec, 1000ths of sec
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
// Helper function
function LeadingZero(time) {
    if(time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function RunTimer() {
    let currentTimerValue = LeadingZero(timer[0]) + ":" + LeadingZero(timer[1]) + ":" + LeadingZero(timer[2]);
    TIMER.innerHTML = currentTimerValue;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60); //Minute
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //Second
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //100th of second
}

// Match the text entered with the provided text on the page:
function SpellCheck() {
    let textEntered = TESTAREA.value;
    let originTextMatch = ORIGINTEXT.substring(0, textEntered.length)

    if(textEntered == ORIGINTEXT) {
        clearInterval(interval);
        TESTWRAPPER.style.borderColor = "#429890";
    } else {
        if(textEntered == originTextMatch) {
            TESTWRAPPER.style.borderColor = "#65CCf3";
        }
        else {
            TESTWRAPPER.style.borderColor = "#E95D0F";
        }
    }
}

// Start the timer:
function Start() {
    let textEnteredLength = TESTAREA.value.length;
    if(textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(RunTimer, 10); // Runs every 1000th of a second
    }
}

// Reset everything:
function Reset() {
    clearInterval(interval); interval = null;
    timerRunning = false;
    timer = [0,0,0,0];

    TESTAREA.value = "";
    TIMER.innerHTML = "00:00:00";
    TESTWRAPPER.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button
TESTAREA.addEventListener("keypress", Start, false);
TESTAREA.addEventListener("keyup", SpellCheck, false);
RESETBUTTON.addEventListener("click", Reset, false);