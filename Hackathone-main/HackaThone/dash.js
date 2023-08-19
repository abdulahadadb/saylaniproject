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


const logout = () => {
    localStorage.clear();
    location.href = "login.html"
}
// getUserData()
window.logout = logout

var name = localStorage.getItem("name");


document.getElementById("postButton").addEventListener("click", function() {
    // Get input values
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;
    
    // Check if input values are empty
    if (postTitle.trim() === "" || postContent.trim() === "") {
        alert("Please type something before posting.");
        return; // Don't proceed further if fields are empty
    }
    
    // Use the input values for further processing
    console.log("Post Title:", postTitle);
    console.log("Content:", postContent);
    
    // You can perform additional actions here, like sending the data to a server
    
    const posts = document.getElementById("posts");
    const newPost = `<div class="title h1 text-center">All Your Post</div>
        <!-- Card Start -->
        <div class="card">
            <div class="row ">
                <div class="col-md-7 px-3">
                    <div class="card-block px-6">
                        <h4 class="card-title">${postTitle}</h4>
                        <p class="card-text">${postContent}</p>
                        <a href="#" class="mt-auto btn btn-primary">Read More</a>
                    </div>
                </div>
                <!-- Carousel start -->
                <div class="col-md-5">
                    <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of carousel -->
            </div>
        </div>`;
    
    // Prepend the new post HTML to the existing content
    posts.innerHTML = newPost + posts.innerHTML;
    
    // Clear input fields after posting
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";


    createPostWithImage(postTitle, postContent);
});

const getUserData = async (uid) => {
    const docRef = doc(db, "posts", uid);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const postDataArray = [];

            // Loop through each key in the data object
            Object.keys(docSnap.data()).forEach(key => {
                const postData = docSnap.data()[key];
                // Check if the key represents a post object
                if (postData && postData.title && postData.content) {
                    postDataArray.push({
                        title: postData.title,
                        content: postData.content
                    });
                }
            });

            console.log("Post data array:", postDataArray);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};


const createPostWithImage = async (postTitle, postContent) => {
    try {
        const postsCollection = collection(db, 'posts'); 
        const newPostDocRef = await addDoc(postsCollection, {
            title: postTitle,
            content: postContent
        });
        
        await getUserData(newPostDocRef.id);

        console.log('Post saved with image:', newPostDocRef.id);
    } catch (error) {
        console.error('Error:', error);
    }
};







