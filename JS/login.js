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

// food@sphere123

// var firebaseConfig = {
//     apiKey: "AIzaSyDU4hHjN2s5NSFc_uhtpZo4lQfG9Jx5PsY",
//     authDomain: "websites-f299e.firebaseapp.com",
//     projectId: "websites-f299e",
//     storageBucket: "websites-f299e.appspot.com",
//     messagingSenderId: "313368796476",
//     appId: "1:313368796476:web:47b94d090065a806635239",
//     measurementId: "G-9P6456R5E5"
// };

// document.getElementById("login_btn").onclick = login;

// firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(function(user){
//     var notLoggedIn=document.getElementById('signin-signup')
//     var loggedIn=document.getElementById('home')
//     if(user){
//         //user is signedd in
//         loggedIn.style.display = 'block'
//         notLoggedIn.style.display = 'none'
//         // window.location.href="home.html";
//         // window.location.href="https://www.google.com/";
//         // window.location.replace("home.html");
//     } else{
//         //no user is signed in
//         loggedIn.style.display = 'none'
//         notLoggedIn.style.display = 'block'
//         // window.location.href="index.html";
//         // window.location.href="https://www.google.com/";
//     }
// });

// function login(event){
//     event.preventDefault()
//     var email=document.getElementById('email_field').value
//     var password=document.getElementById('password_field').value
//     firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
//         // Handle Errors here
//         console.log('Error signing In',error.message)
//         alert(error.message)
//     }).then(function(user){
//         if(user){
//             alert('Welcome back, you are now logged in!')
//         }
//     })
// }

// function logout(){
//     firebase.auth().signOut().then(function(){
//         // signout successful
//     }).catch(function(error){
//         // error
//     })
// }

const firebaseConfig = {
    apiKey: "AIzaSyDU4hHjN2s5NSFc_uhtpZo4lQfG9Jx5PsY",
    authDomain: "websites-f299e.firebaseapp.com",
    databaseURL: "https://websites-f299e-default-rtdb.firebaseio.com/",
    projectId: "websites-f299e",
    storageBucket: "websites-f299e.appspot.com",
    messagingSenderId: "313368796476",
    appId: "1:313368796476:web:019870692c21967a635239",
    measurementId: "G-CE2R2YR1V6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Main Code
var datab  = firebase.database().ref('data');
function UserRegister(){
    var email=document.getElementById('email_field').value;
    var password = document.getElementById('password_field').value;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(function(){})
    .catch(function (error){
            var errorcode = error.code;
            var errormsg = error.message;
        });
}
const auth = firebase.auth();
function SignIn(){
    var email=document.getElementById('email_field').value;
    var password = document.getElementById('password_field').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('name_field'),
        email : getId('email_field'),
        password : getId('password_field')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}