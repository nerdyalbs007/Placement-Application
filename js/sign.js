
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'it';


window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha');

function signed(error){
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.\
      alert("Successfully Logged In");
      window.location="../WT After Registration/course/index.html";
    } else {
      alert('Error'+error);;
    }
  })
}
function auth(){
  firebase.auth().signInWithRedirect(provider);
  // signed();
}

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('number', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

function phoneNo(){
// var phoneNumber = getPhoneNumberFromUserInput();
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha');
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign_in', {
//   'size': 'invisible',
//   'callback': function(response) {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });
this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha');
var phoneNumber="+919689920287"
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      alert("Error")
      // ...
    });
}

function phone(){ 
    var phoneNumber = document.getElementById("phone").innerHTML
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      alert("Check Your SMS")
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
  }

  function verify(){
    var code = getCodeFromUserInput();
confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
  var user = result.user;
  // ...
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  // ...
})
  }

function signIn(){
    // console.log("Hello");
    // console.log("Hello")
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
    // ...
//   });
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // // ...
      // if(error){
      // alert("Error : "+errorMessage);
      // }
      // else{
      //   // console.log("HELL")
        signed(errorMessage);
      //   alert("Successfully Logged In");
      //   window.location.href="../WT After Registration/course/index.html";
      // }
      // console.log(error)
      
    });
    // console.log(email,password)
}

function signout(){
  firebase.auth().signOut().then(function() {
    alert("Logged Out");
    window.location.href="../../WT Login/index.html";
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  // console.log("HJL")
}
function registered(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // alert("Error : "+errorMessage);
  alert("Successfully Registered");
  window.location.href="../WT Login/index.html";
// ...
});
}