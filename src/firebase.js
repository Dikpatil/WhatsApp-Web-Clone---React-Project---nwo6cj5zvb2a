import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCS6bztMWugFG8Bdkq2VE3j8PoPX_hPYYs",
    authDomain: "whaclo.firebaseapp.com",
    projectId: "whaclo",
    storageBucket: "whaclo.appspot.com",
    messagingSenderId: "691820604764",
    appId: "1:691820604764:web:9bd404a4087acc86c4a599"
  };
  const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);