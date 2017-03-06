var input,output;

function inCome() {
    input = document.getElementById("income").value;
    document.getElementById("show-income").innerHTML = input;
}

function outGo() {
    output = document.getElementById("outgo").value;
    document.getElementById("show-outgo").innerHTML = output;
}

function calculation() {
    var comparison
    if (input < output) {
        comparison = "You spend more than you income";
    }
    else if (output < input) {
        comparison = "You have been able to save";
    }
    else {
        comparison = "Cost are equal";
    }
    document.getElementById("show-cal").innerHTML = comparison;
}