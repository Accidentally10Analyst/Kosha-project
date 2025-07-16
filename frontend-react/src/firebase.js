import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0x606k4p5ZzTnv00pvRMMPqfp6nisik4",
  authDomain: "kosha-cafe.firebaseapp.com",
  projectId: "kosha-cafe",
  storageBucket: "kosha-cafe.appspot.com",
  messagingSenderId: "141437963793",
  appId: "1:141437963793:web:07f3f1e4fd4a94c1a1ebb0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
