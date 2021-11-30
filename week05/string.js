var sentence = 'The quick brown fox jumps over the lazy dog';

console.log(`Length: ${sentence.length}`);
console.log(`The position of fox is: ${sentence.indexOf('fox')}`);
sentence = sentence.replace('jumps', 'jumped');
console.log(sentence.toUpperCase());
console.log(`Character at index 10: ${sentence.charAt(10)}`);
