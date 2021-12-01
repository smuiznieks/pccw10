// function renderPosts(posts, container) {
//   const len = posts.length; // posts is an array
//   var html = '';
//   for (let i = 0; i < len; i++) {
//     html += '<li class="post">' +
//       '<h2>' + posts[i].title + '</h2>' +
//       '<h3>' + posts[i].content + '</h3>'
//   }
//   container.innerHTML = '<ul id = "posts">' + html + '</ul>';
// }
// renderPosts(posts, document.getElementById('container'));

function renderBoston(boston, container) {
  console.log(boston.meta);
  let topEarners = boston.data.sort((earner1, earner2) => earner2[11] - earner1[11]);
  // console.log(topEarners);

  var top5 = '';
  for (i = 0; i < 5; i++) {
    console.log(topEarners[i]);
    let earner = topEarners[i];
    top5 += `<li>${earner[8]}<br/>${earner[11]}</li>`
  }

  container.innerHTML = `<div id="topSalaries"><h2>Top 5 Earners<ol>${top5}</ol></h2></div>`;

  let over200k = boston.data.filter(person => person[11] > 200000);
  var richPeople = '';
  for (i = 0; i < over200k.length; i++) {
    let richPerson = over200k[i];
    richPeople += `<li>${richPerson[8]}<br/>${richPerson[11]}</li>`
  }

  container.innerHTML += `<div id="richPeople"><h2>Over 200K<ol>${richPeople}</ol></h2></div>`;
}

function getOver100K(boston, container) {
  let over100k = boston.data.filter(person => calculateSalary(person) > 100000);
  let paragraph = document.createElement("p");
  paragraph.innerHTML = `The number of people making more 100K: ${over100k.length}`;
  container.append(paragraph);
}

function calculateSalary(earner) {
  return parseInt(earner[11]) + parseInt(earner[14]);
}

function displayDepartmentHeadcount(boston, container) {
  let educationEmployees = boston.data.filter(employee => employee[10] === 'Boston Police Department');
  console.log(educationEmployees);
}

renderBoston(boston, document.getElementById('container'));
getOver100K(boston, document.getElementById('container'));
displayDepartmentHeadcount(boston, document.getElementById('container'));
