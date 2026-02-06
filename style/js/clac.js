let total = document.getElementById("Total");


function appendToDisplay(input){

    if (total.value=="Error") {
        total.value = input;
    } else if(total.value=="undefined") {
        total.value = input;
    } else if(total.value=="0") {
        total.value = input;
    } else{
        total.value += input;
    }
}


function clearDisplay(){
    total.value="";
}

function equalToDisplay(){
    try {
        total.value = eval(total.value);
    } catch (error) {
        total.value = "Error";
    }
}