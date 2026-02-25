// Drill 1: The Basics (CRUD Operations)

const fruits=["apple","banana","cherry"];
fruits.push("orange");
fruits.unshift("mango");
fruits.pop();
console.log(fruits);
console.log(fruits.length);

console.log("\n");
// Drill 2: Finding and Replacing

const numbers = [10, 20, 30, 40, 50, 30];
console.log(numbers.indexOf(30));
console.log(numbers.lastIndexOf(30));
console.log(numbers.includes(100));
console.log(numbers.splice(2,1,35));
console.log(numbers);

console.log("\n");
// Drill 3: Slicing and Splicing

const colors = ["red", "green", "blue", "yellow", "purple"];
const sliced=colors.slice(1,3);
console.log(sliced);
colors.splice(3,1,"orange")
console.log(colors);

console.log("\n");
// Drill 4: Joining and Reversing

const letters = ["a", "b", "c", "d", "e"];
letters.reverse();
const updated=letters.join("-");
console.log(updated);

console.log("\n");
// Drill 5: The "Grand" Array Task

const item = ["Laptop", "Mouse", "Keyboard", "Monitor"];
item.push("Webcam");
item.splice(1,1,"Trackpad");
const topTwo=item.slice(0,2);
const final_array=item.join(" | ");
console.log(topTwo);
console.log(final_array);

console.log("\n");
// Simple Iteration (Summing)

const prices=[10.5, 20, 5.75, 40, 15];
let total=0;
prices.forEach(myFunction);
function myFunction(value)
{
    total+=value
}
console.log(total);

console.log("\n");
// Data Transformation (Mapping)

const numberss = [1, 2, 3, 4, 5];
const squared=numberss.map(square_function);
function square_function(value)
{
    return value*value;
}
const asCurrency=numberss.map(dollar_function);
function dollar_function(value)
{
    return "$"+value;
}
console.log(squared);
console.log(asCurrency);

console.log("\n");
// Selecting Data (Filtering)

const scores = [45, 80, 55, 92, 30, 70, 65];
const passingScores=scores.filter(filter_function);
function filter_function(value)
{
    return value>=70;
}
const lowScores =scores.filter(low_filter_function);
function low_filter_function(value)
{
    return value<=50;
}
console.log(passingScores);
console.log(lowScores);

console.log("\n");
// Drill 4: The Reducer (Mathematical Aggregation)

const cart = [15.99, 25.00, 4.50, 60.30];
let final_result=cart.reduce(sum_function,0);
function sum_function(total,value)
{
    return total+value;
}
console.log(final_result);

console.log("\n");
// The "Chain" Challenge

const rawNumbers = [10, 25, 30, 45, 5, 80];
const new_filter_array=rawNumbers.filter(drill_filter);
function drill_filter(value)
{
    return value>=20;
}
const new_map_array=new_filter_array.map(drill_map);
function drill_map(value)
{
    return value*2;
}
let drill_final_result=new_map_array.reduce(drill_sum, 0);
function drill_sum(total, value)
{
    return total+value;
}
console.log(drill_final_result);
