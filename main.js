var screen = document.querySelector('#screen')
var numbers = document.querySelectorAll('#number')
var operators = document.querySelectorAll('.operator')
var decimal = document.querySelector('#decimal')
var clearBtn = document.querySelector('#clear')
var eql = document.querySelector('#equals')

var cache = {
    val1: "",
    val2: "",
    acOp: "",
    res: ""
}

function clearScreen(){
    screen.value = "0" 
}

function clearCacheVals(){
    cache.val1 = ""
    cache.val2 = ""
    cache.acOp = ""
    cache.newOp = ""
    cache.res = ""    
}

function getScreenVal(){
    if(screen.value.includes('.')){
        return parseFloat(screen.value)
    } else {
        return parseInt(screen.value)
    }
}

var setValues = function(){    
    if(!cache.val1){
        
    }
}

var setOperation = function(operator){
    if(!cache.acOp){
        cache.acOp = operator
    }
}

function calculate(operator){
    switch(operator){
        case "+":
            res = val1+val2
            break
        case "-":
            res = val1-val2
            break
        case "*":
            res = val1*val2
            break
        case "/":
            res = val1/val2
            break
        default:
            res = "syntax error"
            break
    }
}

function displayOnScreen(val){
    if(screen.value == "0"){
        if(val == "0"){
            screen.value = "0"
        } else if(val == "."){
            screen.value += "."
        } else {
            if(val == "0"){
                screen.value = "0"
            }
            screen.value = ""
            screen.value += val
        }    
    } else if(screen.value.includes('.') && val == "."){
        screen.value += ""
    } else if(screen.value.length == 10 ){
        screen.value += ""
    } else {
        screen.value += val
    }        
}

numbers.forEach((numBtn) => {
    numBtn.addEventListener('click', (e) => {
        displayOnScreen(e.path[0].innerText)
        screen.onchange = setValues()
    })
})
operators.forEach((opBtn) => {
    opBtn.addEventListener('click', (e) => {
        //setOperation(e.path[0].innerText)
    })
})
decimal.addEventListener('click', (e) => {
    displayOnScreen(e.path[0].innerText)
})
clearBtn.addEventListener('click', () => {
    clearScreen()
    clearCacheVals()
})
eql.addEventListener('click', () => {
    screen.value = res
    clearCacheVals()
})