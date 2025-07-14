import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS_VeyLfa0IrtmwVry6Mk8F2OtCsNpcmM",
  authDomain: "bootcam-3-register.firebaseapp.com",
  projectId: "bootcam-3-register",
  storageBucket: "bootcam-3-register.appspot.com",
  messagingSenderId: "368501702055",
  appId: "1:368501702055:web:30564ea040c0296d864a82",
  measurementId: "G-2320JCJQ90",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };