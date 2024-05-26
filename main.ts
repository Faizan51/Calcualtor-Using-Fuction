import inquirer from "inquirer";

const answer= await inquirer.prompt([
    {message:"Enter first Number ", type: "number", name: "firstNumber"},
    {mesaage: "Enter Second number" ,type: "number", name: "SecondNumber"},
    {message:"Select one of the operators to perform action", type:"list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division"]
},
]);


//Creating Fuctions


let add=(numberOne:number=answer.firstNumber,numberTwo:number=answer.SecondNumber):number => (
    answer.firstNumber+answer.SecondNumber
);


let sub=(numberOne:number=answer.firstNumber,numberTwo:number=answer.SecondNumber):number => (
    answer.SecondNumber-answer.firstNumber
);
let mul=(numberOne:number=answer.firstNumber,numberTwo:number=answer.SecondNumber):number => (
    answer.SecondNumber*answer.firstNumber
);
let div=(numberOne:number=answer.firstNumber,numberTwo:number=answer.SecondNumber):number => (
    (answer.firstNumber/answer.SecondNumber)
);

//conditional statement

if(answer.operator==='Addition') {
    let responsAdd:number=add(answer.firstNumber,answer.SecondNumber)
    console.log(`Your Value is ${responsAdd}`);
}

if(answer.operator==='Subtraction') {
    let responsSub:number=sub(answer.firstNumber,answer.SecondNumber)
    console.log(`Your Value is ${responsSub}`)
}
if(answer.operator==='Multiplication') {
    let responsMul:number=mul(answer.firstNumber,answer.SecondNumber)
    console.log(`Your Value is ${responsMul}`)
}
if(answer.operator==='Division') {
    let responsDiv:number=div(answer.firstNumber,answer.SecondNumber)
    console.log(`Your Value is ${responsDiv}`)
}
