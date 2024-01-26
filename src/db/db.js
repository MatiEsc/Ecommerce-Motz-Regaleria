

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {

  apiKey: "AIzaSyBe728cgitwHaPb5ICuV4C2jslug0f35yc",

  authDomain: "motz-regaleria.firebaseapp.com",

  projectId: "motz-regaleria",

  storageBucket: "motz-regaleria.appspot.com",

  messagingSenderId: "157358439931",

  appId: "1:157358439931:web:8d8342e0333744ef359f5e"

};


// Initialize Firebase

initializeApp(firebaseConfig);

const db = getFirestore()

export default db