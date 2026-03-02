// Drill 1: The "Precision Precision" Challenge

let radius=7;
let area=Math.PI*(Math.pow(radius,2));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.round(area));
console.log(Math.trunc(area));

console.log("\n");

// Drill 2: The "Limit Finder"

const scores=[45, 99, 12, 88, -5, 102];
console.log("Highest Score: "+Math.max(...scores));
console.log("Lowest Score: "+Math.min(...scores));
console.log("Target score: "+Math.abs((Math.max(...scores)-100)));

console.log("\n");

// Drill 4: The "Power & Root" Check

let side = 64;
console.log(Math.sqrt(side));
console.log(Math.cbrt(side));
console.log(Math.pow(5,3));

console.log("\n");

// Drill 5: The "Binary Choice" (Final Drill)

let randomVal = Math.random();
if (randomVal>=0.5)
{
    console.log("HEADS");
}
else
{
    console.log("TAILS");
}
