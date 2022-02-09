# Week 11

## Word Count

```
lorem = lorem.replaceAll(',', '').replaceAll('.', '');
console.log(lorem);
let data = lorem.split(' ');
console.log(data);
console.log(`How many words are there in this string? ${data.length}`)
```

Then update arguments: `let arguments = [data, 1, 3];`

Paginate can be written as one line: `let paginate = (theData, start, pageLength) => theData.slice(start, start + pageLength);`

Make sure we log the answer: `console.log(paginate(...arguments));`

```
let words = (text) => {
  let words = text.split(' ');
  words = words.map((item) => item.replace(',', '')).map((item) => item.replace('.', ''));
  return words;
}
```

```
let wordFrequency = (words) => {
  let count = {};
  words.map(x => {
    if (count[x]) {
      count[x]++
    } else {
      count[x] = 1
    }
  })
  return count;
}
```

This can be rewritten like this:

```
let wordFrequency = (words) => {
  let count = {};
  words.map(x => count[x] ? count[x]++ : count[x] = 1)
  return count;
}
```

```
<script>

let numbers = [0,1,2,3,4];
let mycopy = [...numbers];
mycopy[2] = 9;
console.log(mycopy);
console.log(numbers);

</script>
```
