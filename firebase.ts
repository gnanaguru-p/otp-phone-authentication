// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqlwTjFnvpbSIql9swhjltovQqRC5U5k",
  authDomain: "otp-tutorial-108d1.firebaseapp.com",
  projectId: "otp-tutorial-108d1",
  storageBucket: "otp-tutorial-108d1.appspot.com",
  messagingSenderId: "532584212771",
  appId: "1:532584212771:web:4b5717798b542e4e5b8496"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
auth.useDeviceLanguage()

export { auth }