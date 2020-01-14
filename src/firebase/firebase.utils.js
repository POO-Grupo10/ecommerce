import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1Mi5MIUb7InX-jTA9hiXGScax7S46rWs",
    authDomain: "shop-db-91555.firebaseapp.com",
    databaseURL: "https://shop-db-91555.firebaseio.com",
    projectId: "shop-db-91555",
    storageBucket: "shop-db-91555.appspot.com",
    messagingSenderId: "405026765796",
    appId: "1:405026765796:web:6124cda7952f9bfbc2a5f1",
    measurementId: "G-RPBCYBZZZ2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;