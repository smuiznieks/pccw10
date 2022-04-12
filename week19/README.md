# Week 19

## Cleaning up starter file
1. Delete `Cart` component
2. Clean up imports
3. Not using `props` for `Products` component
4. Delete `[total, setTotal]`
5. Fix buttons
```
<p>{item.name} ${item.cost}</p>
<p>In Stock: {item.inStock}</p>
<Button name={item.name} type="button" onClick={addToCart}>Add to Cart</Button>
```
6. Fix in stock logic: Start by adding if block, then console.log(item), then switch to .find and remove `...`:
```
// must use find instead of filter
let item = items.find((item) => item.name == name);
console.log(item);
if (item.inStock < 1) {
  alert("Out of stock");
  return;
}
// console.log(`add to Cart ${JSON.stringify(item)}`);
setCart([...cart, item]);
```
7. Fix in stock logic for deleting an item from cart:
```
let itemToRestock = cart.find((item, i) => index === i);
setItems((currentItems) => {
  let itemToRemoveFromStock = currentItems.find((item) => item.name == itemToRestock.name);
  itemToRemoveFromStock.inStock++;
  return currentItems;
});
```
8. Now let's get to the restocking functionality:
```
doFetch(url);
console.log(data);
```
9. Map items:
```
let newItems = data.data.map((item) => {
  console.log(item);
  let { name, country, cost, inStock } = item.attributes;
  return { name, country, cost, inStock };
});
```
10. Set items:
```
setItems((currentItems) => {
  currentItems.forEach(x => {
    console.log(x)
    let restockQuantity = newItems.find(item => item.name === x.name)?.inStock;
    x.inStock += restockQuantity;
  })
  // need the spread operator here!!!!
  return [...currentItems];
})
```
11. Remove products default array
12. Update restock logic:
```
if (currentItems.length < 1) {
  return newItems;
}
```

1. Node applications = running JavaScript on back end with Node (rather than in the browser)
2. Make sure to create a `.gitignore` file before starting! It will make your life a lot easier in the future.
3. Create file `server.js`
4. Add line: `console.log('Hello World!)'`
5. `node server.js`
6. Update `server.js` to `console.log(process)`
7. Update `server.js` to `console.log(process.argv)`
8. `node server.js HELLO`
9. Syntax for imports change for the back-end, importing packages 
10. `const express = require('express');` 
11. Conversation about naming conventions (the left is the name of the variable)
12. `node server.js`
13. `MODULE_NOT_FOUND` error 
14. `npm install express`
15. Rerun the command for the server (add `console.log(express)` to the server)
16. Update port number (must be unique!)
17. Copy listen section from Express example
```
// Waiting for users to do something
// Two arguments 1. port 2. callback = what it will run when the server is running
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
```
18. It will keep running (listening) until we stop it with CTRL+C
19. Copy get section from Express example
// Set up end points
// Short for request and response (standard)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
20. Update example to return json: http://expressjs.com/en/5x/api.html#res.json 
// Set up end points
// Short for request and response (standard)
app.get('/', (req, res) => {
  res.json({"hello": "world!"});
});
21. Update get endpoint to '/test' and navigate to localhost:3001
22. API Examples: https://dog.ceo/dog-api/
23. Testing APIs with Postman
