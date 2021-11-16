# Week 03

```
var multiplier = 1;
var table = '';

for (let row = 0; row < 10; row++) {
  let data = '';

  for (let i = 1; i <= 10; i++) {
    let square = i * multiplier;
    
    if (square.toString().length === 1) {
      square += '   ';
    } else {
      square += '  ';
    }
    // data += `${i * multiplier} `;
    data += square;
  }
  table += `${data}\n`;
  multiplier++;
}

console.log(table)
```
