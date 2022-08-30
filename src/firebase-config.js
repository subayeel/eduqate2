import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxPaoFRwRVNbDB-GPn5biAMqhfzUNSF70",
  authDomain: "myeduqate-702ae.firebaseapp.com",
  projectId: "myeduqate-702ae",
  storageBucket: "myeduqate-702ae.appspot.com",
  messagingSenderId: "279166090215",
  appId: "1:279166090215:web:dd6830958e8b3625101b42",
  measurementId: "G-HL4Z16Q419"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);