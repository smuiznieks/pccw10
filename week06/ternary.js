// A task has a description an priority
let task = {description: "Do laundry", priority: 3};

// We want a color to represent the task priority
// lower numbers are high priority (red), and
// larger numbers are lower priority
// NO - Avoid using nested ternary statements
let taskColor = task.priority === 1 ? "red" :
                task.priority === 2 ? "yellow" : "green";

// TODO: fix to avoid using nested ternary statements
// if (task.priority === 1) {
//   taskColor = "red";
// } else if (task.priority === 2) {
//   taskColor = "yellow";
// } else {
//   taskColor = "green";
// }ß

console.log(taskColor);
