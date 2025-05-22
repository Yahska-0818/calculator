function add(num1,num2) {
    return parseInt(num1)+parseInt(num2)
}

function subtract(num1,num2) {
    return parseInt(num1)-parseInt(num2)
}

function multiply(num1,num2) {
    return parseInt(num1)*parseInt(num2)
}

function divide(num1,num2) {
    return parseInt(num1)/parseInt(num2)
}

function operate(num1,operator,num2) {
    if (operator === "+"){
        return add(num1,num2)
    }
    else if (operator === "-") {
        return subtract(num1,num2)
    }
    else if (operator === "*") {
        return multiply(num1,num2)
    }
    else if (operator === "/") {
        return divide(num1,num2)
    }
}

let num1 = prompt("Enter num1")
let operator = prompt("Enter an operator")
let num2 = prompt("Enter num 2")

console.log(operate(num1,operator,num2))