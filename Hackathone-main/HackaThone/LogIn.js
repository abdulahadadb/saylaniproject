import { auth, db, app } from "./FireBase.js"



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
// console.log({auth ,db, app})

function SignIn() {
    const Semail = document.getElementById("signInEmail").value;
    const Spassword = document.getElementById('signInPassword').value;

    document.getElementById("signInEmail").value = "";
    document.getElementById('signInPassword').value = "";

    signInWithEmailAndPassword(auth, Semail, Spassword)
        .then((userCredential) => {
            const user = userCredential.user;

            // You need to get the user's name from somewhere, perhaps during registration
           // Replace with the actual name retrieval logic

            localStorage.setItem('user', user.uid);
            
            console.log("user", user);
            window.location.href = "index.html";  
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Wrong Password");
        });
}



window.SignIn = SignIn





