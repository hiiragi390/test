import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVW31dGo4MAW4VvrQ_Ovu7Ic6t80KD3Gs",
    authDomain: "test3-4ea91.firebaseapp.com",
    projectId: "test3-4ea91",
    storageBucket: "test3-4ea91.appspot.com",
    messagingSenderId: "123367882394",
    appId: "1:123367882394:web:35e0fcf4982d670ea32923"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;