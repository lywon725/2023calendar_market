// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8VmEcPvUiwO8AZP7Fa31v1q66uMNjVHs",
    authDomain: "market-9e62c.firebaseapp.com",
    projectId: "market-9e62c",
    storageBucket: "market-9e62c.appspot.com",
    messagingSenderId: "634206521030",
    appId: "1:634206521030:web:c47a37ad83807cfbe1b9c7",
    measurementId: "G-4MNY132TK3"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
