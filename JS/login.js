// // Firebase authentication (E-mail and Password Method)

// firebase.auth().onAuthStateChanged(function(user){
//     if(user){
//         // user signed in
//         document.getElementById("home").style.display = "block";
//         document.getElementById("login").style.display = "none";

//         var user = firebase.auth().currentUser;

//         if(user != null){
//             var email_id = user.email;
//             // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
//         }
//     } else{
//         // user not signed in
//         document.getElementById("home").style.display = "none";
//         document.getElementById("login").style.display = "block";
//     }
// });

// function login(){
//     var userEmail = document.getElementById('email_field').value;
//     var userPass = document.getElementById('password_field').value;

//     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
    
//         window.alert("Error : " + errorMessage);
    
//         // ...
//     });
// }

// function logout(){
//     firebase.auth().signOut();
// }