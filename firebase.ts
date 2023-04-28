// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSrNO5t2ckeYyirc0jie8v-zHuSloHJM",
  authDomain: "netflix-clone-2f033.firebaseapp.com",
//   databaseURL: ""
  projectId: "netflix-clone-2f033",
  storageBucket: "netflix-clone-2f033.appspot.com",
  messagingSenderId: "193108241753",
  appId: "1:193108241753:web:299dff92195f35f1747048"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
