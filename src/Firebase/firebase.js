import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyCWUnBro1uRQ5j4i5KcO2dQ6yIUGRh4nrs",
  authDomain: "tasksphere-c2d43.firebaseapp.com",
  projectId: "tasksphere-c2d43",
  storageBucket: "tasksphere-c2d43.firebasestorage.app",
  messagingSenderId: "388645284947",
  appId: "1:388645284947:web:69b006eb7738b513dceaa6",
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };  
