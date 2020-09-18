// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPG0XItwbQJ1hQTwg0HfTVvVzG1jOX2T8",
  authDomain: "facebook-clone-70a0a.firebaseapp.com",
  databaseURL: "https://facebook-clone-70a0a.firebaseio.com",
  projectId: "facebook-clone-70a0a",
  storageBucket: "facebook-clone-70a0a.appspot.com",
  messagingSenderId: "660590333367",
  appId: "1:660590333367:web:72cf49c5d8c8b867a8ac32",
  measurementId: "G-JCF7C3Q5PD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
