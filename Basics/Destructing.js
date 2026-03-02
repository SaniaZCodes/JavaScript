// Drill 1: The "Array Unpacker"

let coordinates = [45.7, 12.3];
let[lat,lng]=coordinates;
console.log(lat);
console.log(lng);

console.log("\n");

// Drill 2: The "Object Extractor"
const information={
    username:"Sania Zafar",
    status:"active",
};
let{username, status}=information;
console.log(username+" is currently "+status);

console.log("\n");
// Drill 3: The "Variable Swap"

let sideA = "Red Liquid"; 
let sideB = "Blue Liquid";
[sideA, sideB]=[sideB, sideA];
console.log(sideA);
console.log(sideB);

console.log("\n");
//  Drill 4: The "Deep Scan"

const engine={
    core:"oil",
    temperature:22,
};
let{core, temperature}=engine;
console.log("Engine Core: "+core+" , Temperature: "+temperature+"K");

console.log("\n");

// Drill 5

let settings = { theme: "Dark" };
let{theme, volume=50}=settings
console.log(theme);
console.log(volume);
