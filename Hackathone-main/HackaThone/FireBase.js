import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";


import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore ,collection, addDoc ,onSnapshot,doc, getDoc,setDoc ,query, where,} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCG89R040pYUW-vtLAbkklaVuU2g9YNuSY",
    authDomain: "hackathon-e81a6.firebaseapp.com",
    projectId: "hackathon-e81a6",
    storageBucket: "hackathon-e81a6.appspot.com",
    messagingSenderId: "485941446562",
    appId: "1:485941446562:web:4675a46d8d63c7c2c0d4fb",
    measurementId: "G-NEFXBW3BQB"
};
  
  const app = initializeApp(firebaseConfig);
  // console.log(app)
  const auth = getAuth(app);
  const db = getFirestore(app);
  

  export {auth,db,app}

