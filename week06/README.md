# Week 06

## callback.js

Ways to rewrite `prepare("onions and garlic", chop);`

As an anonymous function:
``` 
prepare("onions and garlic", function() {
  console.log("Chopping" );
});
```

Or as a fat arrow function:
```
prepare("onions and garlic", () => console.log("Chopping"));
```

## callback2.js

Add an option to triple the sum:
```
const triple = (number) => number * 3;
getTotal(3, 1, triple);
```

## ternary.js

```
if (task.priority === 1) {
  taskColor = "red";
} else if (task.priority === 2) {
  taskColor = "yellow";
} else {
  taskColor = "green";
}
```

## ternary2.js

```
message = hobbies.includes("baking") ? "hobby found!" : "hobby not found";
```

Really useful when you might have a null or undefined value:
```
let student;
let grade = student ? student.grade : "Pending"
console.log(grade);

student = {
  name: 'Alex',
  grade: 'B'
}

let grade = student ? student.grade : "Pending"
console.log(grade);
```

## Word Count Exercise

1. Why can't we use `replace`? Why using `toLocaleLowerCase`?
```
text = text.replaceAll(",", "");
text = text.replaceAll(".", "");
text = text.toLocaleLowerCase();
console.log(text);
```
2. Sorting based on array index 1:
```
console.log(myArray);
let bArray = myArray.sort((a, b) => b[1] - a[1]);
```
3. Get top three items:
```
bArray.slice(0, 3)
```

## friends.js
1. filter
```
let friends = users.filter(x => x.location.state === 'Ohio');
console.log(friends);
```
2. sort
```
friends.sort((a, b) => a.dob.age - b.dob.age);
console.log(friends);
```
3. map
```
let names = friends.map(y => `${y.name.first} ${y.name.last}`);
console.log(names);
```

4. map - refactored
```
function getName(user) {
  return `${user.name.first} ${user.name.last}`;
}
```
`let names = friends.map(y => getName(y));`

5. forEach
```
let div = document.getElementById('container');

names.forEach(z => {
  let element = document.createElement('h3');
  element.innerHTML = z;
  div.append(element);
});
```

### Bonus!
1. Add loading message:
```
let div = document.getElementById('container');
let element = document.createElement('div');
element.setAttribute('id', 'loading');
element.innerHTML = 'Loading...';
div.appendChild(element);
```
2. Remove loading message:
`div.removeChild(div.firstChild);`
3. But that only works the first time... remove all children when reloading:
```
while (div.firstChild) {
  div.removeChild(div.firstChild);
}
```
