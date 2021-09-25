var clicks = 0;

function activate() {
    clicks++;
    document.getElementById("clickTarget").innerHTML = clicks;
    setTimeout(check, 1000)
}

function check() {
    document.getElementById("clickButton").style.display = "none";
    document.getElementById("resetButton").style.display = "inline-block"
}

function reset() {
    document.getElementById("clickButton").style.display = "inline-block";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("clickTarget").innerHTML = "0";
    clicks = 0
}