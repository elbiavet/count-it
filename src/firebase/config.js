// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxHHGKuNVnfF9x-fe1xbnv9SmAYQcFIDk",
  authDomain: "portfolio-elbia.firebaseapp.com",
  projectId: "portfolio-elbia",
  storageBucket: "portfolio-elbia.appspot.com",
  messagingSenderId: "290967572360",
  appId: "1:290967572360:web:5817546c69b3e40c66f43d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )




/* LA ANTERIOR CUOTA EXCEDIDA */
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCTg0mVaVPdYjefRxd2hGrt7uM4ocJqam0",
//   authDomain: "react-cursos-576e8.firebaseapp.com",
//   projectId: "react-cursos-576e8",
//   storageBucket: "react-cursos-576e8.appspot.com",
//   messagingSenderId: "240371612883",
//   appId: "1:240371612883:web:6eca1df5129586bdc9e826"
// };

// // Initialize Firebase
// export const FirebaseApp = initializeApp( firebaseConfig );
// export const FirebaseAuth = getAuth( FirebaseApp )
// export const FirebaseDB = getFirestore( FirebaseApp )