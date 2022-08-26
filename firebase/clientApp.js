// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAh_h38JdZNMTmGYvy4vKchPORS-j44W4',
  authDomain: 'pizza-2a845.firebaseapp.com',
  projectId: 'pizza-2a845',
  storageBucket: 'pizza-2a845.appspot.com',
  messagingSenderId: '747701960976',
  appId: '1:747701960976:web:7053f57a6b507f9bd86595',
  measurementId: 'G-4EEF6B9KD6',
};

let analytics;
let firestore;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore();
}
console.log(analytics, firestore);

export { analytics, firestore };
