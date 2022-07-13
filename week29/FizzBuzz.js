function fizzBuzz(num) {
  let result = [];

  for (let i = 1; i < num + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz")
    } else if (i % 3 == 0) {
      result.push("Fizz")
    } else if (i % 5 == 0) {
      result.push("Buzz")
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(15));
