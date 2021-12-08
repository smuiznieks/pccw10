let message = "";
let hobbies = ["sailing", "biking", "coding"];

// NO - Avoid doing assignments inside ternaries
// hobbies.includes("baking") ? 
//   message = "hobby found!" :
//   message = "hobby not found";

// TODO: fix without assignment inside ternary
message = hobbies.includes("sailing") ? "hobby found!" : "hobby not found";

console.log(message);
