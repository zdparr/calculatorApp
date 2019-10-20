document.getElementById("calculator").addEventListener("click", buttonClick);

function buttonClick(num) {

    if (num.target.innerText === "C") {
        clearClick(num);
    }

    if (num.target.innerText === "=") {
        equalClick(num);
    }
    else {
        numberClick(num);
    }
}

function clearClick(num) {
    document.getElementById("display").innerHTML = "";
}

function equalClick(num) {
    let equation = eval(document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = (equation);
}

function numberClick(num) {
    let displayNumber = ""
    displayNumber = document.getElementById("display").innerHTML + num.target.innerText
    document.getElementById("display").innerHTML = displayNumber
}