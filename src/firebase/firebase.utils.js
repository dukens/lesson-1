import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC-7onC0bsagl329t1U-1JfdDV7LLMlXOQ",
    authDomain: "crwn-db-58fac.firebaseapp.com",
    databaseURL: "https://crwn-db-58fac.firebaseio.com",
    projectId: "crwn-db-58fac",
    storageBucket: "crwn-db-58fac.appspot.com",
    messagingSenderId: "374504417927",
    appId: "1:374504417927:web:fb20f47f8a2f88f79f2622"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;