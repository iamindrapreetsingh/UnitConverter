const crypto = require('crypto');
const readline = require("readline-sync");

const choice = readline.question("Welcome to UnitConverter.\n\nEnter 1 for Miles to Km Conversion\nEnter 2 for Fahrenheit to Celcius Conversion\nEnter 3 for Acre to SquareFoot Conversion\nEnter 4 for Hour to Second Conversion\n");

const input = readline.question("\nEnter value to be converted\n");

const milesToKm= (input) => input * 1.609;

const fahToCel = (input) => (input - 32) * 5556;

const acreToSquareFt = (input) => input * 43560;

const hrToSec = (input) => input * 60 * 60;

switch (choice)
{
case "1":
          console.log("\nConverted Value- "+milesToKm(input));
          break;
case "2":
          console.log("\nConverted Value- "+fahToCel(input));
          break;
case "3":
          console.log("\nConverted Value- "+acreToSquareFt(input));
          break;
case "4": 
          console.log("\nConverted Value- "+hrToSec(input));
          break;
default:
    console.log("\nNot a Valid Option. Please Select between 1 to 4 only!")
} 