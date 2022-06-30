import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgyB8rdld3FMNCJyo0eeCw2Vm8qw91SCk",
  authDomain: "my-money-67299.firebaseapp.com",
  projectId: "my-money-67299",
  storageBucket: "my-money-67299.appspot.com",
  messagingSenderId: "583416242744",
  appId: "1:583416242744:web:6366eb412aa0eb0f6b3ccd"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
