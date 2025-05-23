let readlineS = require("readline-sync");
let userName;
let operation = ["/", "*", "-", "+"];
let userOperation;
let userFirstNumber;
let userSecondNumber;

const start = () => {
  userName = readlineS.question("What is your name? ");
  userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  userOperation;
  while (!operation.includes(userOperation)) {
    userOperation = readlineS.question(
      `Hello ${userName}! What operation would you like to perform? `
    );
  }
};

const askFirstNumber = () => {
  userFirstNumber = readlineS.questionInt("Please enter the first number? ");
  while (typeof userFirstNumber !== "number") {
    console.log("This is not a number");
    askFirstNumber();
  }
};

const askSecondNumber = () => {
  userSecondNumber = readlineS.questionInt("Please enter the second number? ");
  while (typeof userSecondNumber !== "number") {
    console.log("This is not a number");
    askSecondNumber();
  }
};

const calculation = (operand, num1, num2) => {
  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 % num2) {
        return `${Math.floor(num1 / num2)} remainder ${num1 % num2}`;
      } else {
        return Math.floor(num1 / num2);
      }

    default:
      return NaN; // Handle invalid operators
  }
};

start();
askFirstNumber();
askSecondNumber();
console.log(
  `The result of ${userFirstNumber} ${userOperation} ${userSecondNumber} is ${calculation(
    userOperation,
    userFirstNumber,
    userSecondNumber
  )}!`
);
