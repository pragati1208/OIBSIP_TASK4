

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
    apiKey: "AIzaSyD8YrNtQtk-xy-UYsYs0Xrx564eEOt-7CU",
    authDomain: "signup-form-ce3ef.firebaseapp.com",
    projectId: "signup-form-ce3ef",
    storageBucket: "signup-form-ce3ef.appspot.com",
    messagingSenderId: "902740321913",
    appId: "1:902740321913:web:3c2d2af1d34cdda6a856a8"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  var firstname = document.getElementById("firstname")
  var lastname = document.getElementById("lastname")
  var email = document.getElementById("Email")
  var passwords = document.getElementById("password")

  window.signup = function(e){
  e.preventDefault();
  var obj = {
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.value,
    passwords:passwords.value,
  }
  createUserWithEmailAndPassword(auth,obj.email,obj.passwords)
  .then(function(success){
    alert("Signup Successfull")
  })
  .catch(function(err){
    alert("error" +err)
  })
  console.log(obj)
};