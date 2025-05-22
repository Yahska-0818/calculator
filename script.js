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
})

button2.addEventListener("click",()=>{
    operator === "" ? num1 += "2" : num2 += "2"
})

button3.addEventListener("click",()=>{
    operator === "" ? num1 += "3" : num2 += "3"
})

button4.addEventListener("click",()=>{
    operator === "" ? num1 += "4" : num2 += "4"
})

button5.addEventListener("click",()=>{
    operator === "" ? num1 += "5" : num2 += "5"
})

button6.addEventListener("click",()=>{
    operator === "" ? num1 += "6" : num2 += "6"
})

button7.addEventListener("click",()=>{
    operator === "" ? num1 += "7" : num2 += "7"
})

button8.addEventListener("click",()=>{
    operator === "" ? num1 += "8" : num2 += "8"
})

button9.addEventListener("click",()=>{
    operator === "" ? num1 += "9" : num2 += "9"
})

button0.addEventListener("click",()=>{
    operator === "" ? num1 += "0" : num2 += "0"
})

buttonAdd.addEventListener("click",()=>{
    operator = "+"
})
buttonSub.addEventListener("click",()=>{
    operator = "-"
})
buttonMulti.addEventListener("click",()=>{
    operator = "*"
})
buttonDiv.addEventListener("click",()=>{
    operator = "/"
})
buttonRes.addEventListener("click",()=>{
    alert(`${parseInt(num1)} ${operator} ${parseInt(num2)} = ${operate(num1,operator,num2)}`)
})
buttonClear.addEventListener("click",()=>{
    num1 = ""
    num2 = ""
    operator = ""
})