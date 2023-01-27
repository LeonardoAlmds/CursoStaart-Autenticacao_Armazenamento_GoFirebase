import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnPUeKwr5pU3B1tDzgXMm-OaOrVkmw0eg",
  authDomain: "auth-e91f4.firebaseapp.com",
  projectId: "auth-e91f4",
  storageBucket: "auth-e91f4.appspot.com",
  messagingSenderId: "237984852650",
  appId: "1:237984852650:web:fed860938b85b87e223ed3"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);