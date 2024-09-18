// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDow3MrebfEChbS4XxFQTK2-9ht3Da9IEQ",
  authDomain: "kiddle-20d15.firebaseapp.com",
  projectId: "kiddle-20d15",
  storageBucket: "kiddle-20d15.appspot.com",
  messagingSenderId: "280880139161",
  appId: "1:280880139161:web:9232ad874a1fa1ad7ba108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth