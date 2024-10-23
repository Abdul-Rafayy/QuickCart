// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQsJ5MS4-MacHnO5wxQX8V2tGe0y6eCXo",
//   authDomain: "myecommerce2-7b8fc.firebaseapp.com",
//   projectId: "myecommerce2-7b8fc",
//   storageBucket: "myecommerce2-7b8fc.appspot.com",
//   messagingSenderId: "715233167432",
//   appId: "1:715233167432:web:3a0acec83b123399d3307d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC30qz83I95e4_kuAkXo6gVyYlOWk5Cz7M",
  authDomain: "ecomweb-cc5cd.firebaseapp.com",
  projectId: "ecomweb-cc5cd",
  storageBucket: "ecomweb-cc5cd.appspot.com",
  messagingSenderId: "563980421692",
  appId: "1:563980421692:web:bd0d293796dbfea2265139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

