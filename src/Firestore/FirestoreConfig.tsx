import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAAD3j7XAJlmUFAxAxTEN5VZvUNAIbhm2E",
  authDomain: "acecrafts-c0ec7.firebaseapp.com",
  projectId: "acecrafts-c0ec7",
  storageBucket: "acecrafts-c0ec7.appspot.com",
  messagingSenderId: "774317434614",
  appId: "1:774317434614:web:12072444bdde35a16eaed7",
};
// Initialize Firebase
const firebaseApp = firebase.default.initializeApp(firebaseConfig);
const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();

export { projectFirestore, projectStorage };
