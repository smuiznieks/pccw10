// But you shouldn't push your api key to your github!!
const url = 'https://api.giphy.com/v1/gifs/trending?api_key=bXoHN9yQjHIfRUlRu6f8c07RfZPc0JCe';

async function getTrendingGifs() {
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
}

getTrendingGifs();
