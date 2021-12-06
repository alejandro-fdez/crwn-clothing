// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAJi5ohaVmcIzBb9DDKZspJ897g8LHKYZo",
  authDomain: "crwn-db-f4bcf.firebaseapp.com",
  projectId: "crwn-db-f4bcf",
  storageBucket: "crwn-db-f4bcf.appspot.com",
  messagingSenderId: "712647073190",
  appId: "1:712647073190:web:d582577d6e422fd56d8367",
  measurementId: "G-JK3XDTDHLH"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;