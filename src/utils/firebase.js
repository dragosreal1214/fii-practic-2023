import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB1Z6QdEGJZTJ8kZ1VDGpsaHdMOz9q5byU",
  authDomain: "fii-practic-2023-c9e7f.firebaseapp.com",
  projectId: "fii-practic-2023-c9e7f",
  storageBucket: "fii-practic-2023-c9e7f.appspot.com",
  messagingSenderId: "900798178320",
  appId: "1:900798178320:web:19701ec51931eeeb8f5695",
  measurementId: "G-HG531PRF02"
};

const app = initializeApp(firebaseConfig)

const authService = getAuth()
const dbService = getFirestore(app)

const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
}

export { auth, dbService, authService }
export default app
