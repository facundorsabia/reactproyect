import  firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDf09ZfoAVwvwkk0_0p6UzPqQDGtI6FEpM",
    authDomain: "technomastercoder.firebaseapp.com",
    projectId: "technomastercoder",
    storageBucket: "technomastercoder.appspot.com",
    messagingSenderId: "1044503674934",
    appId: "1:1044503674934:web:15fe912911566a003c5897"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app);
}