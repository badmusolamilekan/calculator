
const display = document.getElementById("output");

function button_input(num){

    display.value += num ;
}


function get_answer() {
    display.value = eval(display.value);
}

function clear_output() {
    display.value = ""
}