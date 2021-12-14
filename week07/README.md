# Week 07

1. `npm install` with no package.json
2. Delete package-lock.json
3. `npm init`
4. `npm install jest`
5. The importance of `.gitignore`
6. Add `node_modules/` to `.gitignore`

## Greetings
1. `npm init`
2. Create .gitignore
2. `npm install jest`
3. Update package.json: 
```
"scripts": {
  "test": "jest"
},
```
4. Write tests
```
const greet = require('./greetings');

describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('name')).toEqual('Hello, name');
  });
  it('should handle null value', function () {
    expect(greet()).toEqual('Hello there!');
  });
  it('should handle shouting', function () {
    expect(greet('NAME')).toEqual('HELLO NAME!');
  });
  it('should handle 2 names', function () {
    expect(greet(['Name', 'Another'])).toEqual('Hello, Name, Another');
  });
  it('should handle multiple names', function () {
    expect(greet(['Name', 'Another', 'Ruth', 'Gloria'])).toEqual(
      'Hello, Name, Another, Ruth, Gloria'
    );
  });
});
```
5. `npm test`
6. OR if you are using ES modules
`export default greet;`
`import greet from './greetings';`
7. `npm test` results in errors
8. Create a file `.babelrc` with the following contents:
```
{
  "presets": ["@babel/preset-env"]
}
```
9. `npm install @babel/preset-env`
10. `npm test` works!

### What is Babel?!?!?!
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
https://babeljs.io/docs/en/

## Fetch with Giphy

1. Explain url
2. Write and call function
```
async function getTrendingGifs() {
  let response = await fetch(url);
  let topGifs = await response.json();
  // console.log(topGifs);
  let div = document.getElementById('container');
  topGifs.data.forEach(gif => {
    // console.log(gif);
    let img = document.createElement('img');
    img.setAttribute('src', gif.images.fixed_width.url);
    div.append(img);
  });
}

getTrendingGifs();
```
