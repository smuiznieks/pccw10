const isWorkOver = true;
const workday = new Promise((resolve, reject) => {
  if (isWorkOver) {
    resolve("drive home");
  } else {
    reject(new Error("The work day is not over!"))
  }
});

workday
.then((result) => console.log(result))
.catch((err) => console.log(err));

// const afterWork = (firstTask) => {
//   return new Promise((resolve, reject) => {
//     const toDo = `After work I will ${firstTask} then walk the dog!`;
//     resolve(toDo);
//   });
// };

// const myDay = () => {
//   workday
//     .then((result) => afterWork(result))
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message));
// };

// myDay();