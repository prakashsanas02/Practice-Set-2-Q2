// Problem No 2

const prompt = require("prompt-sync")();
let age = prompt("What is your age?");
switch (age) {
  case "19":
    console.log("Your age is 19");
    break;
  case "20":
    console.log("Your age is 20");
    break;
  case "21":
    console.log("Your age is 21");
    break;
  case "22":
    console.log("Your age is 22");
    break;
  default:
    console.log("Your age is not special");
}
