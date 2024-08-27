const addbtn = document.getElementById("btn-add");
const subtractbtn = document.getElementById("btn-subtract");
const multiplybtn = document.getElementById("btn-multiply");
const dividebtn = document.getElementById("btn-divide");
const input = document.getElementById("input-number");

const calculation = document.querySelector(".current-calculation");
const Result = document.querySelector("#current-result");

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// currentResult=currentResult+10;

let calculationDescription = "Some Calculation";

const outputResult = (result, text) => {
  calculation.textContent = text;
  Result.textContent = result;
};

const getUserInput = () => {
  return +input.value;
};

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
};

const writeToLog = (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

const calculateResult = (calculationType) => {
    const enteredNumber = getUserInput();
  if (
    calculationType !== "Add" &&
    calculationType !== "Subtract" &&
    calculationType !== "Multiply" &&
    calculationType !== "Divide"||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "Add") {
    currentResult += +enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Subtract") {
    currentResult -= +enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= +enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= +enteredNumber;
    mathOperator = "/";
  } else {
    console.log("An Error Occured");
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = (num1, num2) => {
  calculateResult("Add");
};

const subtract = () => {
  calculateResult("Subtract");
};

const multiply = () => {
  calculateResult("Multiply");
};

const divide = () => {
  calculateResult("Divide");
};

addbtn.addEventListener("click", add);
subtractbtn.addEventListener("click", subtract);
multiplybtn.addEventListener("click", multiply);
dividebtn.addEventListener("click", divide);
