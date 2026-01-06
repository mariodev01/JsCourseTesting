function performOperation() {
  // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //let results = [];
    // Perform the operation
        let result = multiply(num1, num2);
        let result2 = sum(num1, num2);
        let result3 = division(num1, num2);
        let result4 = res(num1, num2);

        //results.push(result,result2,result3,result4);
    // Display the result
        displayResult(result);
        displayResult2(result2);
        displayResult3(result3);
        displayResult4(result4);
    }else{
        displayResult("Please enter valid numbers");
        displayResult2("Please enter valid numbers");
        displayResult3("Please enter valid numbers");
        displayResult4("Please enter valid numbers");
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}
function sum(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}
function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a / b;
}
function res(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a - b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    
    resultElement.textContent = `The result is: ${result}`;
}
function displayResult2(result) {
    // Display the result in the paragraph element
    const resultElement2 = document.getElementById("result2");
    
    resultElement2.textContent = `The result is: ${result}`;
}
function displayResult3(result) {
    // Display the result in the paragraph element
    const resultElement3 = document.getElementById("result3");
    
    resultElement3.textContent = `The result is: ${result}`;
}
function displayResult4(result) {
    // Display the result in the paragraph element
    const resultElement4 = document.getElementById("result4");
    
    resultElement4.textContent = `The result is: ${result}`;
}
