#! /usr/bin/env node
import inquirer from "inquirer";

//@ts-ignore
const answer = await inquirer.prompt([
  { message: "\nEnter FirstNumber:", type: "number", name: "First_Number"},
  { message: "Enter SecondNumber:", type: "number", name: "Second_Number"},
  {
    message: "Select Options to operate :",
    type: "list",
    name: "operator",
    choices: ["Add", "Sub", "Mul", "Div", "Pow", "Mod"],
  },
]);

// statements of if else
// console.log(answer);

if (answer.operator === "Add") {
  console.log(answer.First_Number + answer.Second_Number);
} else if (answer.operator === "Sub") {
  console.log(answer.First_Number - answer.Second_Number);
} else if (answer.operator === "Mul") {
  console.log(answer.First_Number * answer.Second_Number);
} else if (answer.operator === "Div") {
  console.log(answer.First_Number / answer.Second_Number);
} else if (answer.operator === "Pow") {
  console.log(answer.First_Number ** answer.Second_Number);
} else if (answer.operator === "Mod") {
  console.log(answer.First_Number % answer.Second_Number);
} else {
  console.log("Select valid options...");
}
