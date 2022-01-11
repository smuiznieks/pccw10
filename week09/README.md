# Week 09

1. Example: Async Wrapper
```
(async function getTrendingGifs() {
  let response = await fetch(url);
  let topGifs = await response.json();
  console.log(topGifs);

  let div = document.getElementById('container');
  topGifs.data.forEach(gif => {
    console.log(gif);
    let img = document.createElement('img');
    img.setAttribute('src', gif.images.fixed_width.url);
    div.append(img);
  })
})();
```
2. Refactor code, demo what happens with a default parameter
```
function renderGifs(gifs = []) {
  console.log(gifs);
  let div = document.getElementById('container');
  gifs.forEach(gif => {
    console.log(gif);
    let img = document.createElement('img');
    img.setAttribute('src', gif.images.fixed_width.url);
    div.append(img);
  })
}
```
```
async function getTrendingGifs() {
  let response = await fetch(url);
  let topGifs = await response.json();
  renderGifs(topGifs.data)
}
```
3. Add @param by typing `/**`
```
/**
 * This function will accept an array of gifs
 * and append them to the DOM
 * @param {*} gifs An array of the top gifs on giphy
 * @returns {number} The number of top gifs on giphy
 */
```
4. Demo why this is useful by typing `renderGifs`
5. Update with try/catch
```
async function getTrendingGifs() {
  try {
    let response = await fetch(12345);
    let topGifs = await response.json();
    renderGifs(topGifs.data)
  }
  catch (err) {
    console.log(err);
  }
}
```
