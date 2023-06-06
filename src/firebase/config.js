// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC88OEtTx_W4818YojaY4h39xlqPOW9lHw',
  authDomain: 'ecommerceada-6b7bc.firebaseapp.com',
  projectId: 'ecommerceada-6b7bc',
  storageBucket: 'ecommerceada-6b7bc.appspot.com',
  messagingSenderId: '77611684049',
  appId: '1:77611684049:web:9241e967cde99ee9ec35f0',
  measurementId: 'G-MC4BYH7EQ5',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
