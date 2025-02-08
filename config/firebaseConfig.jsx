// Import the functions you need from the SDKs you need
import { initializeApp , getApps} from "firebase/app";

// @ts-ignore 
import { initializeAuth, getReactNativePersistence  } from "firebase/auth"

// import {getAnalytics} from "farebase/analytics"

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVe-YcrZVIWLi39RIOBxpZlaioxh3jYqA",
  authDomain: "elearning-3bcda.firebaseapp.com",
  projectId: "elearning-3bcda",
  storageBucket: "elearning-3bcda.firebasestorage.app",
  messagingSenderId: "789798431226",
  appId: "1:789798431226:web:3d3e11dbf2b9eed98c5c43",
  measurementId: "G-J516W1E696"
};

// Initialize Firebase
// Check if Firebase is already initialized, and only initialize if it's not
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence (ReactNativeAsyncStorage)
});
export const db = getFirestore(app)

// const analytics = getAnalytics(app);