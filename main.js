import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number ", type: "number", name: "firstNumber" },
    { mesaage: "Enter Second number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operators to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
//Creating Fuctions
let add = (numberOne = answer.firstNumber, numberTwo = answer.SecondNumber) => (answer.firstNumber + answer.SecondNumber);
let sub = (numberOne = answer.firstNumber, numberTwo = answer.SecondNumber) => (answer.SecondNumber - answer.firstNumber);
let mul = (numberOne = answer.firstNumber, numberTwo = answer.SecondNumber) => (answer.SecondNumber * answer.firstNumber);
let div = (numberOne = answer.firstNumber, numberTwo = answer.SecondNumber) => ((answer.firstNumber / answer.SecondNumber));
//conditional statement
if (answer.operator === 'Addition') {
    let responsAdd = add(answer.firstNumber, answer.SecondNumber);
    console.log(`Your Value is ${responsAdd}`);
}
if (answer.operator === 'Subtraction') {
    let responsSub = sub(answer.firstNumber, answer.SecondNumber);
    console.log(`Your Value is ${responsSub}`);
}
if (answer.operator === 'Multiplication') {
    let responsMul = mul(answer.firstNumber, answer.SecondNumber);
    console.log(`Your Value is ${responsMul}`);
}
if (answer.operator === 'Division') {
    let responsDiv = div(answer.firstNumber, answer.SecondNumber);
    console.log(`Your Value is ${responsDiv}`);
}
