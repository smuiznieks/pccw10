var Module = (function() {
  var greeting = 'Hey!';
  function privateGreeting() {
    console.log(greeting);
  }
  return {
    publicGreeting : function() { privateGreeting(); }
  }
})()

Module.greeting; // undefined
Module.privateGreeting(); // undefined
Module.publicGreeting(); // Hey!

/*

****** module.js ****** 
const people = [
  { name: "Anelisy", age: 33, city: "Lisbon" },
  { name: "Maria", age: 32, city: "San Francisco" },
  { name: "Carl", age: 40, city: "Tokyo" },
];
 
const sayHi = (name) => console.log(`Hi ${name}!`)
 
export { people, sayHi };
 
 
****** index.js ****** 
import { people, sayHi } from "./module.js";
 
console.log(people);
sayHi(people[0].name) // Hi Anelisy!

*/
