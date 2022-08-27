import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTF9QcVJvI9Q-9SaiOXVro0mvaLbnAnqs",
  authDomain: "clone-2fd28.firebaseapp.com",
  projectId: "clone-2fd28",
  storageBucket: "clone-2fd28.appspot.com",
  messagingSenderId: "801989104419",
  appId: "1:801989104419:web:192553b9f4df80e4a4b296",
  measurementId: "G-PHX6N3E04E",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const storage = getStorage(app);
