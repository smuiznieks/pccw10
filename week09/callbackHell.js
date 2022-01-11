const double = async function (number) {
  return number * 2
};

const triple = async function (number) {
  return number * 3
};

async function getTotal(num1, num2, callback) {
  const sum = num1 + num2;
  return callback(sum);
};

getTotal(1,2,double)
.then((total) => {
  return double(total)
    .then((doubledTotal) => {
      return triple(doubledTotal)
        .then((tripledTotal) => {
          console.log(tripledTotal)
        })
    })
})
// See the pyramid shape and all the }) at the end? 
// Eek! This is affectionately known as callback hell.
