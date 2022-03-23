import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6nANanz-6--MFfhpfijHxTlBdDATUIqU",
    authDomain: "emailpass-react.firebaseapp.com",
    projectId: "emailpass-react",
    storageBucket: "emailpass-react.appspot.com",
    messagingSenderId: "912907495631",
    appId: "1:912907495631:web:a42a9623452abb40a0efba"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export{auth, googleAuthProvider, facebookAuthProvider};