 //Get the result display element
let screenDisplay = document.getElementById("screen");

// Variable to keep track of the current input
let currentInput = "";

// Function to handle number button clicks
function tapnum(num) {
    // console.log("Tapped number: " + num);
    currentInput += num;  // Append the number to the current input
    screenDisplay.textContent = currentInput;  // Update the display with the new input
}

// Function to handle operator button clicks
function tapoperator(operator) {
    // console.log("Tapped operator: " + operator);
    currentInput += " " + operator + " ";  // Add operator to current input (with spaces for readability)
    screenDisplay.textContent = currentInput;  // Update the display
}

// Function to handle clear (AC) button click
function tapclear(clear) {
    // console.log("Tapped option: " + clear);
    currentInput = "";  // Clear the current input
    screenDisplay.textContent = "";  // Clear the display
}

// Function to handle delete (DEL) button click
function tapDel(del) {
    // console.log("Tapped option: " + del);
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    screenDisplay.textContent = currentInput;  // Update the display
}

function add(num1,num2)
{
    return num1+num2;
}

let result;
let calculations;

const equalTo=document.getElementById("equals");
equalTo.addEventListener('click',()=>{
    try {                                                
            // Replace operators for safe eval
            const startInput = currentInput.replace(/[^0-9+\-*/.]/g, "");
            const result = eval(startInput); // Evaluate the input string
            screenDisplay.textContent = isFinite(result) ? result : "Error"; // Handle division by zero or invalid results
            currentInput = result.toString(); // Allow chaining calculations
        } catch (error) {
            screenDisplay.textContent = "Error"; // Handle syntax errors
            currentInput = "="; // Reset input
        }
});



