import {auth ,db, app} from "./FireBase.js"



import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore ,collection, addDoc,doc, getDoc,setDoc } from  "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

// console.log({auth ,db, app})



function SignUp(){
    
  const email = document.getElementById("email").value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const PhoneNum = document.getElementById('PhoneNum').value;
  // console.log(name);
  // console.log(PhoneNum);
  // console.log(email);
  // console.log(password);
   // Clear the input fields

  let UserData = {
    name: name,
    PhoneNum:PhoneNum,
    email:email,
    // password:password,
  }
// console.log(UserData)

   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById('password').value = "";
   document.getElementById('PhoneNum').value = "";


   createUserWithEmailAndPassword(auth, email, password)
   .then(async (userCredential) => {
     try {
       const user = userCredential.user;
       await setDoc(doc(db, "users", user.uid), {
         ...UserData,
         uid: user.uid,
       });
       localStorage.setItem('user', user.uid);
       localStorage.setItem('name', UserData.name);
       window.location.href = "index.html";
       console.log("Document written with ID: ", user.uid);
     } catch (e) {
       console.error("Error adding document: ", e);
     }
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log('errorMessage', errorMessage);
     alert(errorMessage.slice(22, 55));
   });
}

// SignUp()





window.SignUp = SignUp