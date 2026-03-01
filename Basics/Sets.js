// Drill 1: The "No-Duplicate" Filter

const rawAttempts=["admin", "user1", "admin", "guest", "user1", "admin"];
const uniqueUsers= new Set(rawAttempts);
uniqueUsers.add("moderator");
uniqueUsers.add("admin");
console.log(uniqueUsers.size);
console.log(uniqueUsers);

console.log("\n");

// Drill 2: The "Security Clearance" Check

const blacklistedIPs=new Set();
blacklistedIPs.add("192.168.1.1");
blacklistedIPs.add("10.0.0.5");
blacklistedIPs.add("172.16.0.10");
let currentRequestIP = "10.0.0.5";
if(blacklistedIPs.has(currentRequestIP))
{
    console.log("Access Denied");
}
blacklistedIPs.delete("192.168.1.1");
blacklistedIPs.clear();
console.log(blacklistedIPs.size);

console.log("\n");

// Drill 3: The "Admin Broadcaster"

const activeAdmins=new Set();
activeAdmins.add("Alice");
activeAdmins.add("Bob");
activeAdmins.add("Charlie");
activeAdmins.forEach(function(value)
{
    console.log("Sending alert to "+value);
})
console.log("Using for ... of loop");
for (const x of activeAdmins)
{
    console.log("Sending alert to "+x);
}

console.log("\n");

// Drill 4: The "Array-Set Shuffle"

const tags = ["js", "html", "css", "js", "react", "html"];
const cleanTags=new Set(tags);
const finalArray=([...cleanTags]);
finalArray.sort();
console.log(finalArray);

console.log("\n");

// Drill 5: The "Mutual Friends" Logic

const friendsA = ["John", "Sara", "Mike"];
const friendsB = ["Sara", "Mike", "Elena"];
const totalUniqueFriends=new Set([...friendsA, ...friendsB]);
console.log(totalUniqueFriends.has("John"));
console.log(totalUniqueFriends.size);
