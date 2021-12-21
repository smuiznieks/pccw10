# Week 08

## Eye Movement Exercise
1. Add a second eye element
```
<div class="eye">
  <div class="ball"></div>
</div>
```
2. `console.log(balls)`
3. Add a for loop
```
for (var i = 0; i < balls.length; i++) {
```

That's it!

What if we wanted to create another eye using JS only?
```
const eyes = document.getElementsByClassName('eyes');
let secondEye = document.createElement('div');
secondEye.setAttribute('class', 'eye');
let secondBall = document.createElement('div');
secondBall.setAttribute('class', 'ball');
secondEye.append(secondBall);
eyes[0].append(secondEye);
```

## Bootstrap
1. Follow instructions in Get Started documentation to add Bootstrap to this project: https://getbootstrap.com/ 
2. Refresh page and notice changes
3. Create a file in the same folder as your index.html: `style.css`
4. Add the following line AFTER your Bootstrap stylesheet: `<link href="style.css" rel="stylesheet" >`
5. Discuss why this needs to be AFTER, add the following code to your CSS file:
```
body {
  color: red;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
```
6. Make our CSS less ugly?
7. Add Bootstrap container div, instructions [here](https://getbootstrap.com/docs/5.1/layout/containers/#default-container)
8. Add button, instructions [here](https://getbootstrap.com/docs/5.1/components/buttons/)
`<button type="button" class="btn btn-primary">Refresh</button>`
9. Add onClick, more details [here](https://www.w3schools.com/jsref/event_onclick.asp)
