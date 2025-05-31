const readlineS = require("readline-sync");
const operation = ["/", "*", "-", "+"];

const askUseroperation = (userName) => {
  let userOperation;
  while (!operation.includes(userOperation)) {
    userOperation = readlineS.question(
      `Hello ${userName}! What operation would you like to perform? `
    );
  }
  return userOperation;
};

const askNumber = (promptNumber) => {
  const userNumber = readlineS.questionInt(
    `Please enter the ${promptNumber} number? `
  );
  while (typeof userNumber !== "number") {
    console.log("This is not a number");
    askNumber();
  }
  return userNumber;
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

const start = () => {
  let userName = readlineS.question("What is your name? ");
  userName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const operation = askUseroperation(userName);
  const userFirstNumber = askNumber("first");
  const userSecondNumber = askNumber("second");

  console.log(
    `The result of ${userFirstNumber} ${operation} ${userSecondNumber} is ${calculation(
      operation,
      userFirstNumber,
      userSecondNumber
    )}!`
  );
};

start();
