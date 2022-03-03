var c;
function switchOffAndOn() {
    if (c === 1) {
        document.getElementById("rush").style.display = "";
        return c = 0;
    }
    else {
        document.getElementById("rush").style.display = "none";
        return c = 1;
    }
}