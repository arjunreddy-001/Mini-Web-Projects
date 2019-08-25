const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
    let hr = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    let hrPosition = (hr*360/12) + (min*360/60)/12, minPosition = (min*360/60) + (sec*360/60)/60 , secPosition = sec*360/60;

function RunTheClock() {
    
    hrPosition = hrPosition + (30/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(RunTheClock, 1000);