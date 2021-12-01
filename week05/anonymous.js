var anonymous = function() {
  console.log('I am anonymous!');
}

const numbers = [1, 2, 3];
// Not an arrow function
numbers.map(function(number) {
  console.log(`I am a number: ${number}`);
})

// Arrow function
numbers.map(number => {
  console.log(`I am a number but fat arrow style: ${number}`)
})
