import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyA4WuMyxbGBpGneoH_IhdaMDvQpCyAgW7I",
    authDomain: "crwn-database-60df8.firebaseapp.com",
    databaseURL: "https://crwn-database-60df8.firebaseio.com",
    projectId: "crwn-database-60df8",
    storageBucket: "crwn-database-60df8.appspot.com",
    messagingSenderId: "342094890702",
    appId: "1:342094890702:web:069a69734a4a15b45bb29f",
    measurementId: "G-54JT4E6G53"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;