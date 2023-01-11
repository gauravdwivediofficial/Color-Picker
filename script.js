let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function chnageBgToGrey(){
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0"
    selectedColorHexCodeElement.textContent = "#e0e0e0"
}

function chnageBgToGreen(){
    colorPickerContainerElement.style.backgroundColor = "#6fcf97"
    selectedColorHexCodeElement.textContent = "#6fcf97"
}

function chnageBgToBlue(){
    colorPickerContainerElement.style.backgroundColor = "#56ccf2"
    selectedColorHexCodeElement.textContent = "#56ccf2"
}

function chnageBgToPurple(){
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9"
    selectedColorHexCodeElement.textContent = "#bb6bd9"
}