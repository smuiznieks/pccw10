function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    // console.log(word[i]);
    if (word[i] !== word[word.length - i - 1]) {
      // console.log(word[i]);
      // console.log(word[word.length - i - 1]);
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('selga'));
