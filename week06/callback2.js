const double = (number) => {
  return number * 2;
}

const getTotal = (num1, num2, callback) => {
  const sum = num1 + num2;
  return callback(sum);
};

getTotal(4, 5, double);
