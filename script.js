let firstNumberInput = document.getElementById("firstNumber");
let secondNumberInput = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function checkResult() {
    let firstNumberValue = parseInt(firstNumberInput.textContent);
    let secondNumberValue = parseInt(secondNumberInput.textContent);
    let userInput = parseInt(userInputElement.value);
    let result = firstNumberValue + secondNumberValue;
    if (userInput === result) {
        gameResultElement.textContent = "Congratulations! You got it right";
        gameResultElement.style.backgroundColor = "#028a0f"
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c"
    }
}

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberInput.textContent = Math.ceil(firstRandomNumber);
    secondNumberInput.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();
