// Write a function that checks if a number is even or odd
// Hint: % is a	modulus (division remainder)
const data = [4, 76, 104, 119, 191, 223, 228, 317, 326, 338, 459, 474, 489, 557, 619, 647, 688, 724, 755, 956];



// Write a function that draws a "square" (or maybe try a rectangle?)
// Hint: Use HTML <pre> tag (preformatted text)
/*
square(4) should output:
####
####
####
####
*/



// Write a function that draws a right angle triangle
/*
triangle(4) should output:
#
##
###
####
*/



// Write a function that takes in a string and then prints out the longest word

const paragraph = "Cronut small batch ugh bespoke, readymade helvetica mustache tattooed drinking vinegar air plant. Cronut salvia schlitz woke stumptown helvetica fashion axe pinterest microdosing slow-carb next level migas snackwave. Organic master cleanse pok pok, hammock cliche succulents tilde chillwave you probably haven't heard of them. Mixtape mumblecore selfies, thundercats tacos snackwave man braid schlitz migas salvia chicharrones.";

function getLongestWord(lotsOfWords) {
  let words = lotsOfWords.split(' ');
  // console.log(words);
  let longestWord = '';

  for (i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  return longestWord;
}

console.log(getLongestWord(paragraph));

// Write a function that calculates the total value of the contents of your wallet

const values = {
  one: 1.00,
  five: 5.00,
  ten: 10.00,
  twenty: 20.00,
  penny: 0.01,
  nickle: 0.05,
  dime: 0.1,
  quarter: 0.25
}

const myWallet = [ 
  bills = { 
    one: 3,         // 03.00
    five: 2,        // 10.00
    ten: 0,         // 00.00
    twenty: 1       // 20.00
  },
  coins = {
    penny: 4,       // 00.04
    nickle: 4,      // 00.20
    dime: 3,        // 00.30
    quarter: 7      // 01.75
  }
];

function lookInWallet(wallet) {
  let grandTotal = 0.00;
  for (i = 0; i < wallet.length; i++) {
    // console.log(wallet[i]);
    let typeOfMoney = wallet[i];
    for (key in typeOfMoney) {
      console.log(key);
      // console.log(typeOfMoney[key]);
      let amount = typeOfMoney[key] * values[key];
      grandTotal += amount;
    }
  }

  return grandTotal;
}

// console.log(lookInWallet(myWallet));
