//Coded but not completely implemented

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

const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  function G_SignIn(){
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e =>{ 
        alert(e.msg)
        window.open("https://aditi1403.github.io/website_foodosphere/home.html","_self");});
  }
  login.getElementById('google-signin').addEventListener('click',(e) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
  
      alert(user.displayName);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
  
      alert(errorMessage);
    });
   });

   signOut.addEventListener('click',(e) => {

    signOut(auth).then(() => {
     // Sign-out successful.
     window.open("https://aditi1403.github.io/website_foodosphere/","_self");
    }).catch((error) => {
     // An error happened.
    });
 
   });