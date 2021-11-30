var anonymous = function() {
  console.log('I am anonymous!');
}

const numbers = [1, 2, 3];
numbers.map(function(number) {
  console.log(`I am a number: ${number}`);
})

numbers.map(number => {
  console.log(`I am a number but fat arrow style: ${number}`)
})
