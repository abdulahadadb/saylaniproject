// Ensure that Firebase is properly initialized before using its components.
import { auth, db, app } from "./FireBase.js";

// Import Firebase authentication and firestore components.
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const storage = getStorage();

const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);


    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let Name = document.getElementById("proname");
        let PEmail = document.getElementById('proEmail');
        // console.log("Document data:", docSnap.data());
        const profileData = document.querySelector('#profileData')
        const profilePic = document.getElementById('Profile-pic')


        const imgURL = docSnap.data().img;
        document.getElementById('Profile-pic').src = imgURL ? imgURL : './img/profile.png';


        profileData.innerHTML = `
        <h2>${docSnap.data().name}</h2>
        <h2>${docSnap.data().email}</h2>
      `
      
        // Name.value = docSnap.data().fullname; 
        document.getElementById('loader').style.display = 'none';
        console.log("No such document!");
    }
}
document.getElementById('loader').style.display = 'block';

onAuthStateChanged(auth, (user) => {
    const uid = localStorage.getItem('user')
    const useruid = user.uid;
    // console.log(uid)
    getUserData(uid)
    // if (user && uid) {
    //     const uid = user;
    //     // console.log(uid)
    //     if (location.pathname !== '/Home.html') {
    //         location.href = 'Home.html'
    //     }

    // } else {
    //     if (location.pathname !== '/index.html' && location.pathname !== "/signup.html") {
    //         location.href = "index.html"
    //     }
    // }
});


const logout = () => {
    localStorage.clear();
    location.href = "index.html"
}
// getUserData()
window.logout = logout
window.getUserData = getUserData


var fileInput = document.getElementById('file')
var userProfile = document.getElementById('Profile-pic')



fileInput.addEventListener("change", () => {
    // console.log(fileInput.files[0].name)
    var file = fileInput.files[0].name
    // console.log(file)
    userProfile.src = URL.createObjectURL(fileInput.files[0])
})


let upload = document.getElementById("Uplo-btn");


const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, `images/proPIC/${file.name}`);
        const uploadTask = uploadBytesResumable(mountainsRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progresss = document.getElementById("progress");
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                progresss.innerHTML = `<h1>${Math.floor(progress)}% done</h1>`;
                if (progress === 100) {
                    progresss.style.display = 'none';
                } else {
                    progresss.style.display = 'block';
                }
                switch (snapshot.state) {
                    case 'paused':
                        // console.log('Upload is paused');
                        break;
                    case 'running':
                        // console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
}


upload.addEventListener('click', async () => {
    try {
        let file = document.getElementById("file");
        const res = await uploadFile(file.files[0])
        // console.log("res-->", res)
        let img = document.getElementById("Profile-pic");
        img.src = res;

        // sfsafsfsd
        const uid = localStorage.getItem('user')
        var ref = doc(db, "users", uid);
        await updateDoc(
            ref, {
            img: img.src,
        }
        )

    } catch (err) {
        console.log(err)
    }
})

const chatqury = () => {
    var innerwidth = window.innerWidth;
    if (innerwidth <= 768) {
        // console.log(innerwidth)
        window.location.href = "Chat.html"
    }
    else {
        window.location.href = "comChat.html"
    }
}

window.chatqury = chatqury;