// Drill 1   Getting Date Components

let current_moment=new Date();
console.log("Year: "+current_moment.getFullYear());
console.log("Month: "+current_moment.getMonth());
console.log("Day of the Month: "+current_moment.getDate());
console.log("Day of the Week: "+current_moment.getDay());

console.log("\n");
// Drill 2   Setting a Future Date

let drill_2=new Date();
drill_2.setFullYear(2023);
drill_2.setMonth(11);
drill_2.setDate(25);
console.log(drill_2);

console.log("\n");
// Drill 3      Measuring Elapsed Time

let start=Date.now();
for(let i=1;i<=10000000;i++)
{
}
let end=Date.now();
console.log("Time Taken: "+(end-start)+" ms");

console.log("\n");
// Drill 4      Date Arithmetic (Adding Days)

let  today=new Date();
today.setDate(today.getDate()+10);
console.log("Date after 10 days: "+today);

console.log("\n");
// Drill 5      Formatting Strings

my_birthday=new Date("2026-4-3");
console.log(my_birthday.toDateString());
console.log(my_birthday.toISOString());
console.log(my_birthday.toLocaleDateString());

console.log("\n");
