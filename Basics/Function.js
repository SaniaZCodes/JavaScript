// Drill 1

function welcomeUser(userName , userCity) 
{
    return "Welcome "+userName+ " from "+userCity+" !";
}

let result= welcomeUser("Sania Zafar","Haripur");
console.log(result);

console.log("\n");
// Drill 2

const calculateTotal= function(price, tax) {return price+tax};
console.log(calculateTotal(1000,180));

console.log("\n");
// Drill 3

const findSquare=num =>num*num;
console.log(findSquare(5));
console.log(findSquare(9));

console.log("\n");
// Drill 4

function greetGuest(name="Guest")
{
    return "Hello "+name;
}
console.log(greetGuest("Sania Zafar"));
console.log(greetGuest());

console.log("\n");
// Drill 5

const miniCalc=(num1, num2, operation="subtract")=>{
    if (operation==="add")
    {
        return num1+num2;
    }
    else if(operation==="multiply")
    {
        return num1*num2;
    }
    else
    {
        return num1-num2;
    }
}
console.log(miniCalc(10,5,"add"));
console.log(miniCalc(10,5,"multiply"));
console.log(miniCalc(10,5));

console.log("\n");
// Drill 6

x=sumAll(12,4,2,6,19,1,4,6,8,22,1,48,1);
function sumAll()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
console.log(sumAll(12,4,2,6,19,1,4,6,8,22,1,48,1));
