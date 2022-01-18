# Week 10

## Permute String
```
function setTags(permutation) {
  console.log(tagArray)
  console.log(permutation)
  
  tagArray.forEach((item, index) => {
    item.innerText = permutation[index];
  });
}
```

## Transpose Matrix
1. What is going on in the loop?
```
function transpose() {
  console.log('transposing...');
  for (let i = 0; i < matrix.length - 1; i++) {
    console.log(`first loop where i = ${i} and matrix[i] = ${matrix[i]}`);
    for (let j = i + 1; j < matrix.length; j++) {
      console.log(`second loop where j = ${j} and matrix[i][j] = ${matrix[j]}`);
    }
  }
}
```
2. Write swapping logic, add `swap(i, j);` in inner loop and `console.log(matrix);` outside of loops
```
function swap(firstIndex, secondIndex) {
  let firstNumber = matrix[secondIndex][firstIndex];
  let secondNumber = matrix[firstIndex][secondIndex];
  matrix[secondIndex][firstIndex] = secondNumber;
  matrix[firstIndex][secondIndex] = firstNumber;
}
```
3. Update UI
function writeToGrid() {
  let flattenedArray = matrix.flat();
  console.log(flattenedArray)
  for (let i = 0; i < boxes.length; i++) {
    boxes.item(i).innerText = flattenedArray[i];
  }
}

## Rotate Matrix
1. What is going on in this loop?
```
function rotate() {
  console.log('rotating...');
  transpose();
  let floor = Math.floor(matrix.length / 2);
  for (let i = 0; i < floor; i++) {
    for (let j = 0; j < matrix.length; j++) {
      
    }
  }
}
```
2. Update the values
```
function updateValues(firstIndex, secondIndex) {
  let k = matrix.length - 1 - firstIndex;
  let firstNumber = matrix[secondIndex][firstIndex];
  let secondNumber = matrix[secondIndex][k];
  matrix[secondIndex][firstIndex] = secondNumber;
  matrix[secondIndex][k] = firstNumber;
}
```
3. `console.log(matrix)` and `writeToGrid()`
4. Check that all this logic works by testing with a larger matrix:
```
grid-template-columns: repeat(4, 60px);
grid-template-rows: repeat(4, 60px);
...
<div class="box 10">10</div>
<div class="box 11">11</div>
<div class="box 12">12</div>
<div class="box 13">13</div>
<div class="box 14">14</div>
<div class="box 15">15</div>
<div class="box 16">16</div>
...
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
```

## Hanoi Tower
1. Update index.html"
```
<div>
  <input type="text" id="numDisk" name="numDisk">
</div>
```
2. Update tower.js:
```
let nDisks = 5;
if (document.getElementById('numDisk').value) {
  nDisks = document.getElementById('numDisk').value;
}
```

## Binary Search
1. Establish base case for not finding the letter in the given array
```
if (startIndex > endIndex) {
  binarySearchResults = -1;
  return false;
}
```
2. Find middle index between the given start and end
`let midIndex = Math.floor((startIndex + endIndex) / 2);`
3. Check if the value at midIndex is equal to the character being searched for (uncomment starter lines)
`if (letter < array[midIndex]) {`
4. Comment out last line `// return false;`
