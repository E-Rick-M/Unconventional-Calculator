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

const add = (num1, num2) => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += +enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('Add',initialResult,enteredNumber,currentResult);
};

const subtract = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= +enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
};

const multiply = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= +enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
};

const divide = () => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= +enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
};

addbtn.addEventListener("click", add);
subtractbtn.addEventListener("click", subtract);
multiplybtn.addEventListener("click", multiply);
dividebtn.addEventListener("click", divide);
