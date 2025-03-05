// calculator program

const display = document.getElementById("display"); // gets the display element


function appendToDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
}


function calculate() {
        try{
            display.value = eval(display.value); // eval() function evaluates the expression. DONT USE IN REAL JOB AS ITS A SECURITY RISK*/
    }
    catch(error){
        display.value = "Error";
    }
}