import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

/*
  This function get the authenticated users details
  from firebase if the user is signed in and then,
  it proceeds to store it in the fire store
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  /*
    This conditional block checks if the snapshot of the user
    returned from firestore already exists.
    If it doesn't, it creates a new one.
  */
  if (!snapShot.exists) {
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
      console.log("There was an error creating the user>>>>", error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
