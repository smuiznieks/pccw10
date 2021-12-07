var users = [];
var button = document.getElementById('search');

function getUsers() {
  users = data.results;
  console.log(users);
  findFriends();
}

// Calling this function feels like a real API request because it has a delay using setTimeout
function mockApiRequest() {
  console.log('Fetching users...')
  // getUsers = callback!
  setTimeout(getUsers, 3000);
}

function findFriends() {  
  // TODO: Filter who live in the same state (e.g. Ohio)

  // TODO: Sort friends by age (youngest to oldest)
  
  // TODO: Return an array of top friends that only contains first and last names of users
  // The map() method creates a new array populated with the results of calling 
  // a provided function on every element in the calling array.

  // TODO: Append names to HTML div with id container

}

// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event)
// The second parameter is the function we want to call when the event occurs
// There are other ways to interact with click events, but using this example to demonstrate another callback!
button.addEventListener('click', mockApiRequest)
