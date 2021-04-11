import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCfrYY8Vqem_lx45iquYSp81HQgi-TxxG8",
    authDomain: "fir-practice-6586f.firebaseapp.com",
    projectId: "fir-practice-6586f",
    storageBucket: "fir-practice-6586f.appspot.com",
    messagingSenderId: "187288390186",
    appId: "1:187288390186:web:e990d901222ebd1753d153"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}