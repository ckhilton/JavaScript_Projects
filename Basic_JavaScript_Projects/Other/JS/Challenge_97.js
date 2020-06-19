function displayNaN() {
    var x = 0 / 0;
document.getElementById("NaN").innerHTML = x;
}

function displayNaN1() {
    var x = 0 / 0;
document.getElementById("NaN1").innerHTML = isNaN(x);
}

function displayNaN2() {
    var x = 2 / 1;
document.getElementById("NaN2").innerHTML = isNaN(x);
}