function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
}


function displayResult(result) {
    document.getElementById("result").innerText = "The result is: " + result;
}

function add() {
    const [num1, num2] = getInputValues();
    displayResult(num1 + num2);
}

function subtract() {
    const [num1, num2] = getInputValues();
    displayResult(num1 - num2);
}

function multiply() {
    const [num1, num2] = getInputValues();
    displayResult(num1 * num2);
}

function divide() {
    const [num1, num2] = getInputValues();
    if (num2 === 0) {
        alert("Cannot divide by zero!");
    } else {
        displayResult(num1 / num2);
    }
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result will appear here";
}
