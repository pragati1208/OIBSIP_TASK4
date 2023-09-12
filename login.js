import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8YrNtQtk-xy-UYsYs0Xrx564eEOt-7CU",
    authDomain: "signup-form-ce3ef.firebaseapp.com",
    projectId: "signup-form-ce3ef",
    storageBucket: "signup-form-ce3ef.appspot.com",
    messagingSenderId: "902740321913",
    appId: "1:902740321913:web:3c2d2af1d34cdda6a856a8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  var email = document.getElementById("email");
  var password = document.getElementById("password");

    window.login=function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value,

    };
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
      var uid = success.user.uid;
      console.log(uid);
      alert("Login Successful");
      localStorage.setItem("uid", uid); // Store the UID in local storage
      window.location.replace('User.html');
    })
    .catch(function(err){
        
      console.error("Login error: ", err.message);
      alert("Login error: " + err.message);
    });
    
  }