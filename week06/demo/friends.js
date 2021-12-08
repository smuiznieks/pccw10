var users = [];

function getUsers() {
  users = data.results;
  console.log(users);
  findFriends();
}

// Calling this function feels like a real API request because it has a delay using setTimeout
function mockApiRequest() {
  let div = document.getElementById('container');

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  let element = document.createElement('p');
  element.innerText = 'Loading...';
  div.append(element);

  console.log('Fetching users...');
  // getUsers = callback!
  setTimeout(getUsers, 3000);
}

// TODO: Write a function that returns a user's first and last name as a string
function getName(user) {
  // console.log(user);
  return `${user.name.first} ${user.name.last}`;
}

function findFriends() {  
  // TODO: Filter users who live in the same state (e.g. Ohio)
  let friends = users.filter(x => x.location.state === "Ohio");
  // console.log(friends);

  // TODO: Sort friends by age (youngest to oldest)
  friends.sort((a, b) => a.dob.age - b.dob.age);
  console.log(friends);
  
  // TODO: Return an array of top friends that only contains first and last names of users
  // The map() method creates a new array populated with the results of calling 
  // a provided function on every element in the calling array.
  let names = friends.map(y => getName(y));
  console.log(names);

  // TODO: Append names to HTML div with id container
  let div = document.getElementById('container');
  div.removeChild(div.firstChild);
  names.forEach(name => {
    let element = document.createElement('h3');
    console.log(element);
    element.innerText = name;
    div.append(element);
  })
}

var button = document.getElementById('search');
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event)
// The second parameter is the function we want to call when the event occurs
// There are other ways to interact with click events, but using this example to demonstrate another callback!
button.addEventListener('click', mockApiRequest)
