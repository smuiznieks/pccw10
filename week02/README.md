# Week 02

1. Execute the following commands from the terminal: `mkdir week02 `
2. `cd week02`
3. `touch index.html`
4. `code .` to open VS Code
5. Open index.html in VS Code
6. Type `doc` and click tab to populate starter html text
7. Add a `<script></script>` tag after the closing html tag
8. Drag and drop the html file into Google Chrome
9. To access Developer Tools, right click on the page and select `Inspect`
10. Add the following line to your html body: `<h1>Hello World!</h1>`
11. Add the following line inside your script tag: `console.log('Hello World!');`
12. Refresh Google Chrome and verify your changes are there

NOTE: We skipped Steps 13 - 19 in today's demo
13. Follow instructions in Get Started documentation to add Bootstrap to this project: https://getbootstrap.com/ 
14. Refresh page and notice changes
15. Create a file in the same folder as your index.html: `style.css`
16. Add the following line AFTER your Bootstrap stylesheet: `<link href="style.css" rel="stylesheet" >`
17. Discuss why this needs to be AFTER, add the following code to your CSS file:
```
body {
  color: red;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
```
18. Make our CSS less ugly?
19. Add Bootstrap container div, instructions [here](https://getbootstrap.com/docs/5.1/layout/containers/#default-container)

20. JavaScript Time! Create an array of objects
```
const myFriends = [
  {
    id: 101,
    name: 'Selga',
    state: 'OH',
    favoriteColor: 'purple',
    isStudent: false,
  },
  {
    id: 102,
    name: 'Anna',
    state: 'IL',
    favoriteColor: 'blue',
    isStudent: true
  }, 
  {
    id: 103,
    name: 'Tim',
    state: 'AZ',
    favoriteColor: 'black',
    isStudent: true
  }
]
```
21. Log to help figure out what's going on in here
```
console.log(myFriends);
console.log(myFriends.length);
console.log(myFriends[myFriends.length]);
console.log(myFriends[myFriends.length - 1]);
```
22. Loop
```
for (i = 0; i < myFriends.length; i++) {
  console.log(i);
  console.log(myFriends[i]);
  console.log(myFriends[i].name + ', ' + myFriends[i].isStudent);
  if (myFriends[i].isStudent) {
    console.log("Do your homework!");
  } else {
    console.log("Are you ready for office hours?");
  }
}
```
23. Rendering to the DOM - Add the following to the html body `<div id="displayFriends"></div>`
24. Rendering to the DOM - Add the following to the script tag:
```
function renderFriends(friends) {
  const display = document.querySelector("#displayFriends");

  for (i = 0; i < myFriends.length; i++) {
    const friendElement = document.createElement("h3");
    friendElement.innerHTML = friends[i].name;
    display.append(friendElement);
  }
}

renderFriends(myFriends);
```
