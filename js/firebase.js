// Firebase CDN version

const firebaseConfig = {
  apiKey: "AIzaSyAUj_cyz7mcmSGoa522zChA4USIGtxXNNk",
  authDomain: "inspirehub-7be66.firebaseapp.com",
  projectId: "inspirehub-7be66",
  storageBucket: "inspirehub-7be66.firebasestorage.app",
  messagingSenderId: "765683009685",
  appId: "1:765683009685:web:cde590b01c09d22d67f39c",
  measurementId: "G-89XY1ZYSHC"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();