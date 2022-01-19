// permute a string
const A = "abcd";
const mlen = 3; // matrix length
let icount = 0;
const permuations = [];
const tagArray = [];
let tag = document.getElementsByClassName("box");
let len = tag.length;
for (let i = 0; i < len; i++) {
  tagArray[i] = tag.item(i); // get a handle on divs
  console.log(tag.item(i).innerText);
}

function setTags(permutation) {
  console.log(tagArray);
  console.log(permutation);
  console.log(permutations);
  tagArray.forEach((item, index) => {
    item.innerText = permutation[index];
  })
}

function step() {
  setTags(permutations[icount++]);
}
const permutations = permute(A);

function permute(A) {
  let len = A.length;
  if (len === 1) {
    return A;
  }
  let pick = "";
  let permutations = [];
  for (let i = 0; i < len; i++) {
    pick = A[i];
    var remainder = A.slice(0, i) + A.slice(i + 1, len);
    // console.log(A.slice(0, i));
    // console.log(A.slice(i + 1, len));
    for (var perm of permute(remainder)) {
      // console.log(remainder);
      permutations.push(pick + perm);
    }
  }
  return permutations;
}
