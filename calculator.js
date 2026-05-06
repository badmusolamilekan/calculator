
const display = document.getElementById("output");

function buttonInput(num){

    display.value += num ;
}


function getAnswer() {
    display.value = eval(display.value);
}

function clearOutput() {
    display.value = ""
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}