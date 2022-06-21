import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// import { getDatabase, ref, set } from "firebase/database";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD12U6gGxkX7q_SDJMOVTmyjf3oHJgpn2I",
  authDomain: "emeritus-cd19d.firebaseapp.com",
  databaseURL: "https://emeritus-cd19d-default-rtdb.firebaseio.com",
  projectId: "emeritus-cd19d",
  storageBucket: "emeritus-cd19d.appspot.com",
  messagingSenderId: "79336576676",
  appId: "1:79336576676:web:61344dce20ae202036b831",
};

// VERSION 7
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// const button = document.getElementById("clickme");

// button.addEventListener("click", (e) => {
//   const logs = db.ref("logs");

//   const id = Math.random().toString().replace(".", "");

//   logs.child(id)
//     .set({
//       clickedAt: new Date().toString(),
//       username: 'smuiznieks'
//     }).then(() => console.log('Wrote to db!'));
// });

const app = initializeApp(firebaseConfig);
// console.log(app);
const db = getDatabase();

const button = document.getElementById("clickme");

button.addEventListener("click", (e) => {
  const id = Math.random().toString().replace(".", "");
  set(ref(db, "logs/" + id), {
    clickedAt: new Date().toString(),
    username: "smuiznieks",
  }).then(() => console.log("Wrote to database!"));
})
