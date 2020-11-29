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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot  = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;