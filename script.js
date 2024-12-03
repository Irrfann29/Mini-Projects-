const display = document.querySelector("input");


function displayInput(input){
    display.value +=input
}
function calculate(){
    display.value = eval(display.value);
}
function allClear(){
    display.value =""
}
function deleteItem(){
    display.value = display.value.slice(0, -1)
}

