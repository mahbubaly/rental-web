// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPsGA8afLsfC4pW8JuKiKgLK_wTKxhPfQ",
  authDomain: "rental-web-3bae4.firebaseapp.com",
  projectId: "rental-web-3bae4",
  storageBucket: "rental-web-3bae4.appspot.com",
  messagingSenderId: "463964750031",
  appId: "1:463964750031:web:a5008e97fc2e1b6c9137ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app