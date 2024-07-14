// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6JSxyAPYkImZ9aM4HJRvSvBPDQli-N8I",
    authDomain: "webnotes-alldevs.firebaseapp.com",
    projectId: "webnotes-alldevs",
    storageBucket: "webnotes-alldevs.appspot.com",
    messagingSenderId: "504778328196",
    appId: "1:504778328196:web:628bdc2bdcff14b4385ad1",
    measurementId: "G-CDW6R1S0K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };

