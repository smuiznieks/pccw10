const isWorkOver = false;
// const workday = new Promise((resolve, reject) => {
//   if (isWorkOver) {
//     resolve("go grocery shopping");
//   } else {
//     reject(new Error("The work day is not over!"))
//   }
// });

function workday() {
  return new Promise((resolve, reject) => {
    if (isWorkOver) {
      resolve("go grocery shopping");
    } else {
      reject(new Error("The work day is not over!"))
    }
  });
}

workday()
.then((result) => console.log(result))
.catch((err) => console.log(err.message));

const afterWork = (firstTask) => {
  return new Promise((resolve, reject) => {
    const toDo = `After work I will ${firstTask} then walk the dog!`;
    resolve(toDo);
  });
};

const myDay = () => {
  workday
    .then((result) => afterWork(result))
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};

myDay();