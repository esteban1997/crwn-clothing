import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBslBkCNeQcyx4lL6bSXmKrkcIy8wXpU0w",
  authDomain: "crwn-db-c472a.firebaseapp.com",
  projectId: "crwn-db-c472a",
  storageBucket: "crwn-db-c472a.appspot.com",
  messagingSenderId: "805455381858",
  appId: "1:805455381858:web:2991772794f7ba3aee183b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;