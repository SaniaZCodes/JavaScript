// Drill 1 Variable Shadowing

let user="Ali";
function greetUser()
{
    let user="Zain";
    console.log("Inside the function: "+user);
}
greetUser();
console.log("Inside outside function: "+user);


console.log("\n");
// Drill 2   Block Scope (let vs var)

{
    var points=10;
    let bonus=5;
}
console.log("Points: "+points);
// console.log("Bonus: "+bonus);

console.log("\n");
// Drill 3   Function Scope Nesting

function parent()
{
    let gold="10kg";  
    function child()
    {
        console.log("Gold: "+gold);
    }
    child();
}
parent();

console.log("\n");
// Drill 4

function hoistingTest()
{
    score=100;
    console.log("Score: "+score);
    var score;
}
/* function hoistingLet()
{
    console.log("Rank: "+rank);
    let rank=1;
}
 */
hoistingTest();
// hoistingLet();

console.log("\n");
// Drill 5   Strict Global Assignment

function makeGlobal()
{
    message="I am accidental";
}
makeGlobal();
console.log(message);
