document.getElementById("calculator").addEventListener("click", buttonClick);

function buttonClick(num) {

    if (num.target.id === "deleteBtn") {
        clearClick(num);
    }

    if (num.target.value === "=") {
        equalClick(num);
    }
    else {
        numberClick(num);
    }
}

function clearClick(num) {
    document.getElementById("display").innerText = "";
}

function equalClick(num) {
    let equation = eval(document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = (equation);
}

function numberClick(num) {
    let displayNumber = ""
    displayNumber = document.getElementById("display").innerText + num.target.value
    document.getElementById("display").innerHTML = displayNumber
}