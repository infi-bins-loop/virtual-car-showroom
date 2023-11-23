import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbNovjAgRGz3yZqfOswewlnRownQxAeQ0",
  authDomain: "project539-2c792.firebaseapp.com",
  projectId: "project539-2c792",
  storageBucket: "project539-2c792.appspot.com",
  messagingSenderId: "414853207837",
  appId: "1:414853207837:web:665db26b7365bd817233f4",
  measurementId: "G-ND94099SJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
