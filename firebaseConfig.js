// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVaQmk2wiD-tFjp_gvjgBim5Dq2KCrAVw",
  authDomain: "flux-1ff34.firebaseapp.com",
  projectId: "flux-1ff34",
  storageBucket: "flux-1ff34.firebasestorage.app",
  messagingSenderId: "587303039653",
  appId: "1:587303039653:web:52d7ffc7a730529f2d534c",
  measurementId: "G-DZJ0Z9YT18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to sign up new users
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Add user to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      username: email.split('@')[0], // Default username (can be changed later)
      createdAt: new Date()
    });
    console.log("User signed up and data stored in Firestore");
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}

// Function to sign in existing users
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Retrieve user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("User data:", userDoc.data());
    } else {
      console.log("No such document!");
    }
    console.log("User signed in");
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
}

export { signUp, signIn };
