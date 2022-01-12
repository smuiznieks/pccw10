// But you shouldn't push your api key to your github!!
const url = 'https://api.giphy.com/v1/gifs/trending?api_key=bXoHN9yQjHIfRUlRu6f8c07RfZPc0JCe';

// TODO: refactor by creating renderGifs function
// Implement default param gifs = []
/**
 * This function renders top 50 gifs to the dom
 * @param {Array} gifs - An array of top gifs on giphy
 * @returns the number of top gifs
 */
function renderGifs(gifs = []) {
  let div = document.getElementById('container');
  gifs.forEach(gif => {
    console.log(gif);
    let img = document.createElement('img');
    img.setAttribute('src', gif.images.fixed_width.url);
    div.append(img);
  })

  return gifs.length;
}

// TODO: review async 
// TODO: add try catch
async function getTrendingGifs() {
  try {
    let response = await fetch(url);
    let topGifs = await response.json();
    // console.log(topGifs);
    renderGifs(topGifs.data);
  }
  catch (err) {
    console.log(err);
  }
}

getTrendingGifs();
