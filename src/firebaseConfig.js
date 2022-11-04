import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2F3YeMAUoQNslkm-mWjmio9We3VhdwwA",
  authDomain: "basic-blog-8692d.firebaseapp.com",
  projectId: "basic-blog-8692d",
  storageBucket: "basic-blog-8692d.appspot.com",
  messagingSenderId: "252761229676",
  appId: "1:252761229676:web:ea679850752dd320ea8b49"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)