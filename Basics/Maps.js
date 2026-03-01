// Drill 1: The "Digital ID Card"

const employeeMap=new Map();
employeeMap.set(101,"Alice");
employeeMap.set(102,"Bob");
employeeMap.set(103,"Charlie");
console.log(employeeMap.get(102));
console.log(employeeMap.size);

console.log("\n");

// Drill 2: The "Inventory Update"

const inventory=new Map([["apples", 50], ["bananas", 30]]);
console.log(inventory.has("apples"));
inventory.set("bananas",45);
inventory.delete("apples");
console.log(inventory.entries());

console.log("\n");

// Drill 3: The "Dynamic Pricing" Loop

const priceList=new Map([["Laptop", 1000], ["Mouse", 50], ["Keyboard", 80]]);
priceList.forEach(function(key, value)
{
    console.log("Product: "+value+" | Price: $"+key);
})
let total=0;
for(const [x,y] of priceList)
{
    total+=y;
}
console.log("Total Inventory Value: " + total);

console.log("\n");

// Drill 4: The "Advanced Key" Challenge

const user1 = { name: "John" };
const user2 = { name: "Sara" };
const userPermissions=new Map();
userPermissions.set(user1,"Admin");
userPermissions.set(user2,"Editor");
console.log(userPermissions.get(user1));
console.log(userPermissions.has(user2));

console.log("\n");

// Drill 5: The "Inverted Data" Challenge

const rawData = new Array(["id_1", "Active"], ["id_2", "Pending"], ["id_3", "Active"]);
const statusMap= new Map(rawData);
statusMap.set("id_2","Active");
const finalArray=[...statusMap];
console.log(finalArray);
