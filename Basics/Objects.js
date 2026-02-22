// Drill 1

const myCar={
    brand:"Toyota",
    model:"Corolla",
    year:2022,
};
console.log(myCar.brand);
console.log(myCar["year"]);

console.log("\n");
// Drill 2

myCar.displayInfo=function(){return "This car is a "+this.brand+" "+this.model+" from "+this.year;}
console.log(myCar.displayInfo());

console.log("\n");
// Drill 3

myCar.year=2024;
myCar.color="Black";
delete myCar.model;
console.log(myCar);

console.log("\n");
// Drill 4

myCar.engine={
    "horsepower":150,
    "fuelType":"Petrol",
};
console.log(myCar.engine.horsepower);

console.log("\n");
// Drill 5

myCar.checkStatus=function(){
    if (this.year>2023)
    {
        return "This car is brand new!"
    }
    else
    {
        return "This car is an old classic."
    }
};
console.log(myCar.checkStatus());
