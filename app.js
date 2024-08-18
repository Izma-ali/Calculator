var inputField = document.getElementById("input")

function getNumber(value) {
    var btnValue = value.innerHTML
    inputField.value = inputField.value + btnValue
    // if(inputField.value=="+" || inputField.value=="-" || inputField.value=="*" || inputField.value=="/"){
    //     if(inputField.value.lenght-1){
              
    //     }
    // }
}
// ac function

function clearInput(){
    inputField.value = ""
}

// del fuction

function deleteLastVal(){
    inputField.value = inputField.value.slice(0,-1)
    
}

function calculations(){
    inputField.value = eval(inputField.value)
}