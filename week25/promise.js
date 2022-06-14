function makeSandwich(fillings) {
  const sandwichPromise = new Promise(function(resolve, reject){
    //when you're ready, you can resolve the promise
    resolve(`here is your sub! Your fillings are ${fillings.join(' ')}`)
    //if something went wrong, you can reject this promise
    reject({error:`something went wrong`})
  });
  return sandwichPromise;
}

function pinkySwear(secretHandShake) {
  const pinkyPromise = new Promise((resolve, reject) => {
    if (secretHandShake === 'that scene from Parent Trap') {
      resolve('I have your back!');
    };

    reject({error:"you didn't know the secret handshake"});
  });

  return pinkyPromise;
};
