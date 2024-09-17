// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV7hUc6bOaK7RSzhlBKYD5qpbQIuexGjw",
  authDomain: "portifolio-e8b8c.firebaseapp.com",
  projectId: "portifolio-e8b8c",
  storageBucket: "portifolio-e8b8c.appspot.com",
  messagingSenderId: "270583223004",
  appId: "1:270583223004:web:935c569177e0d3c4359a19",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
