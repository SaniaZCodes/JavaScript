// Drill 1: The "Manual Accumulator"

let totalPower = 0;
for(let i=1;i<=10;i++)
{
    totalPower+=i;
}
console.log(totalPower);

console.log("\n");

// Drill 2: The "Odd-Even Scanner"

for (let a=1;a<=15;a++)
{
    if(a%2==0)
    {
        console.log("Port "+a+" : SECURE");
    }
    else
    {
        console.log("Port "+a+" : VULNERABLE");
    }
}

console.log("\n");

// Drill 3: The "Dynamic List Builder"

let guests = ["Alex", "Blake", "Casey", "Drew", "Eden"];
for(let b=0;b<guests.length;b++)
{
    console.log("Guest #"+(b+1)+": "+guests[b])
}

console.log("\n");

// Drill 4: The "Emergency Countdown"

for(let c=20;c>=0;c--)
{
    console.log("Reactor cooldown in "+c+" seconds....");
    if(c==0)
    {
        console.log("Reactor Stabilized");
    }
}

console.log("\n");

// Drill 5: The "Binary Multiplier" (Final Drill)

let virusPower = 2.
let minutes = 0.
while(virusPower<1000)
{
    virusPower=virusPower*2;
    minutes++;
}
console.log("Final power: "+virusPower+" after "+minutes+" minutes");
