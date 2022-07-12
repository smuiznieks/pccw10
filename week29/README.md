# Week 29

If you are giving a test file like `practice.test.js`, follow these steps:

1. `npm init`
2. `npm i jest`
3. `npm test`

Bonus points if you create a `.gitignore` file

## Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

fizzBuzz(3);
expect it to return: ["1", "2", "Fizz"]
fizzBuzz(5);
expect it to return: ["1", "2", "Fizz", "4", "Buzz"]

## Palindrome

Given a value, write a function that will test to see if the string is a palindrome or not. Return true if it is or false if it’s not.

isPalindrome('tacocat');
expect it to return: true

## [Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
