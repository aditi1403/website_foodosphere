// // Firebase authentication (E-mail and Password Method)

// var 
firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
// const
 auth = firebase.auth();
function SignIn(){
    var email=document.getElementById('email_field').value;
    var password = document.getElementById('password_field').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e =>{ 
        alert(e.msg)
        window.open("https://aditi1403.github.io/website_foodosphere/home.html","_self");});
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
    // document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

function logout(){
    firebase.auth().signOut().then(function(){
        window.open("https://aditi1403.github.io/website_foodosphere/","_self");
        // signout successful
    }).catch(function(error){
        // error
    })
}