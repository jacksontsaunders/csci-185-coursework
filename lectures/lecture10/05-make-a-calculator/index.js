const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    // 2. Access the second number that the user typed in and store it
    //    as a variable.
    let secondNumber = document.querySelector("#num2").value;
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    let answer =  Number (firstNumber) + Number (secondNumber);
    // 4. Add the two numbers together.
    document.querySelector("#answer").textContent = answer;
    // 5. Write the result to the #answer section
}

const subtractNumbers = (ev) => {
    // Same as above but subtract!
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector("#num2").value;
    let answer =  Number (firstNumber) - Number (secondNumber);
    document.querySelector("#answer").textContent = answer;
}

const multiplyNumbers = (ev) => {
    // Same as above but multiply!
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector("#num2").value;
    let answer =  Number (firstNumber) * Number (secondNumber);
    document.querySelector("#answer").textContent = answer;
}

const divideNumbers = (ev) => {
    // Same as above but divide!
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector("#num2").value;
    let answer =  Number (firstNumber) / Number (secondNumber);
    document.querySelector("#answer").textContent = answer;
}

