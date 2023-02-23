const inch = document.getElementById ("inch");
const selectUnit = document.getElementById ("selectUnit");
const outputLength = document.getElementById ("outputLength");

function calculate () {
    if (selectUnit.value == "cm") {
        outputLength.value = inch.value * 2.54;
    }
    else if (selectUnit.value == "mm") {
        outputLength.value = inch.value * 25.4;
    }
    else if (selectUnit.value == "m") {
        outputLength.value = inch.value * 0.0254;
    }
}