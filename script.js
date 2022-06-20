let num1 = 0;
let num2 = 0;

function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
    const calcDisplay = document.querySelector("#input");
    calcDisplay.textContent = rounded;
}

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("subtract", rounded);
    const calcDisplay = document.querySelector("#input");
    calcDisplay.textContent = rounded;
}

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("multiply", rounded);
    const calcDisplay = document.querySelector("#input");
    calcDisplay.textContent = rounded;
}

function divide(num1, num2) {
    let divideValue = (num1 / num2);q

    // error check for division by 0
    if (divideValue == "Infinity") {
        return alert("Can't divide by 0");
    } else {
        let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(2);
        console.log("divide", rounded);
        const calcDisplay = document.querySelector("#input");
        calcDisplay.textContent = rounded;
    }
}
