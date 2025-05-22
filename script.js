const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const button0 = document.getElementById("0")
const buttonAdd = document.getElementById("+")
const buttonSub = document.getElementById("-")
const buttonMulti = document.getElementById("*")
const buttonDiv = document.getElementById("/")
const buttonRes = document.getElementById("=")
const buttonClear = document.getElementById("clear")
const buttonBack = document.getElementById("backspace")
const display = document.getElementById("display") // Use custom event listeners to check for update of num1,num2,operator value and then change the display

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
    let num = parseInt(num1)/parseInt(num2)
    let returnNum = Math.round((num + Number.EPSILON) * 100) / 100
    return returnNum
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

let num1 = ""
let num2 = ""
let operator = ""

button1.addEventListener("click",()=>{
    operator === "" ? num1 += "1" : num2 += "1"
    display.textContent = `${num1} ${operator} ${num2}`
})

button2.addEventListener("click",()=>{
    operator === "" ? num1 += "2" : num2 += "2"
    display.textContent = `${num1} ${operator} ${num2}`
})

button3.addEventListener("click",()=>{
    operator === "" ? num1 += "3" : num2 += "3"
    display.textContent = `${num1} ${operator} ${num2}`
})

button4.addEventListener("click",()=>{
    operator === "" ? num1 += "4" : num2 += "4"
    display.textContent = `${num1} ${operator} ${num2}`
})

button5.addEventListener("click",()=>{
    operator === "" ? num1 += "5" : num2 += "5"
    display.textContent = `${num1} ${operator} ${num2}`
})

button6.addEventListener("click",()=>{
    operator === "" ? num1 += "6" : num2 += "6"
    display.textContent = `${num1} ${operator} ${num2}`
})

button7.addEventListener("click",()=>{
    operator === "" ? num1 += "7" : num2 += "7"
    display.textContent = `${num1} ${operator} ${num2}`
})

button8.addEventListener("click",()=>{
    operator === "" ? num1 += "8" : num2 += "8"
    display.textContent = `${num1} ${operator} ${num2}`
})

button9.addEventListener("click",()=>{
    operator === "" ? num1 += "9" : num2 += "9"
    display.textContent = `${num1} ${operator} ${num2}`
})

button0.addEventListener("click",()=>{
    operator === "" ? num1 += "0" : num2 += "0"
    display.textContent = `${num1} ${operator} ${num2}`
})

buttonAdd.addEventListener("click",()=>{
    if (num1 !== "" && num2 !== "") {
        num1 = operate(num1,operator,num2)
        num2 = ""
    }
    operator = "+"
    display.textContent = `${num1} ${operator} ${num2}`
})

buttonSub.addEventListener("click",()=>{
    if (num1 === "") {
        display.textContent = "Enter a number first"
    } else {
        if (num1 !== "" && num2 !== "") {
        num1 = operate(num1,operator,num2)
        num2 = ""
    }
    operator = "-"
    display.textContent = `${num1} ${operator} ${num2}`
    }
})

buttonMulti.addEventListener("click",()=>{
    if (num1 !== "" && num2 !== "") {
        num1 = operate(num1,operator,num2)
        num2 = ""
    }
    operator = "*"
    display.textContent = `${num1} ${operator} ${num2}`
})

buttonDiv.addEventListener("click",()=>{
    if (num2 == "0") {
        display.textContent = "You can't divide by 0 fool, try again"
    } else{
        if (num1 !== "" && num2 !== "") {
            num1 = operate(num1,operator,num2)
            num2 = ""
        }
        operator = "/"
        display.textContent = `${num1} ${operator} ${num2}`
    }

})

buttonRes.addEventListener("click",()=>{
    if (num1 === "" || num2 === "" || operator === "") {
        display.textContent = `Invalid`
        num1 = ""
        num2 = ""
        operator = ""
    } else if (num2 == "0") {
        display.textContent = "You can't divide by 0 fool, try again"
        num1 = ""
        num2 = ""
        operator = ""
    }else {
        display.textContent = `${operate(num1,operator,num2)}`
        num1 = `${operate(num1,operator,num2)}`
        num2 = ""
        operator = ""
        display.textContent = `${num1} ${operator} ${num2}`
    }
})

buttonClear.addEventListener("click",()=>{
    num1 = ""
    num2 = ""
    operator = ""
    display.textContent = ``
})

buttonBack.addEventListener("click",()=>{
    operator === "" ? num1 = num1.slice(0,-1) : num2 = num2.slice(0,-1)
    display.textContent = `${num1} ${operator} ${num2}`
})