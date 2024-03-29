const firebaseConfig = {
  apiKey: "AIzaSyBuzKgL395THDwIOdcmMEs3EcLitnL5fDQ",
    authDomain: "analyticstest-b38dd.firebaseapp.com",
    databaseURL: "https://analyticstest-b38dd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "analyticstest-b38dd",
    storageBucket: "analyticstest-b38dd.appspot.com",
    messagingSenderId: "1083928819599",
    appId: "1:1083928819599:web:cba7d133ee642328767dfa",
    measurementId: "G-4NJ4FK7367",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("webForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var userId = getElementVal("userid");
  var name = getElementVal("name");
  var email = getElementVal("email");
  var imageUrl = getElementVal("imageurl");

  // saveMessages(name, emailid, msgContent);
  writeUserData(userId, name, email, imageUrl);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    userId: userId,
    name: name,
    email: email,
    imageUrl: imageUrl
  });
}