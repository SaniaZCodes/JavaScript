// Drill 1

let totalBalance = 5000.456;
let withdrawAmount = 1200;
let bankFee = 2.5;
console.log("Amount withdraw: "+withdrawAmount);
console.log("Bank fee: "+bankFee);
let remainingBalance=totalBalance-(withdrawAmount+bankFee);
console.log("Remaining balance: "+remainingBalance.toFixed(2));

console.log("\n");
// Drill 2

let cartTotal = 458.70;
let task_a=Math.floor(cartTotal);
let task_b=Math.ceil(cartTotal);
let task_c=Math.round(cartTotal);
console.log("Customer: "+task_a);
console.log("Shopkeeper: "+task_b);
console.log("Ideal: "+task_c);

console.log("\n");
// Drill 3

let diceValue = Math.random()*6;
let  new_value=Math.ceil(diceValue);
console.log("Game Started\nDice Rolled: "+new_value);

console.log("\n");
// Drill 4

let fuelPrice = "115.75"; 
let liters = 10;
let total_cost=parseFloat(fuelPrice)*liters;
console.log("Total Bill: "+total_cost);

console.log("\n");
// Drill 5

let mondaySteps = 5000;
let tuesdaySteps = 8500;
let wednesdaySteps = 3200;
let biggest_value=Math.max(mondaySteps,tuesdaySteps,wednesdaySteps);
let lowest_value=Math.min(mondaySteps,tuesdaySteps,wednesdaySteps);
console.log("Highest: "+biggest_value);
console.log("Lowest: "+lowest_value);
console.log("Type: "+typeof(mondaySteps));
