function prepare(ingredients, callback) {
  console.log("Preparing " + ingredients);
  callback();
}

function chop(){
  console.log("Chopping");
}

prepare("onions and garlic", chop);
