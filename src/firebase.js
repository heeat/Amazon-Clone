// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFQhK2OV9GQQwsM422iOQpN9b-KhAkOy4",
  authDomain: "oreva-3b742.firebaseapp.com",
  databaseURL: "https://oreva-3b742.firebaseio.com",
  projectId: "oreva-3b742",
  storageBucket: "oreva-3b742.appspot.com",
  messagingSenderId: "919831482480",
  appId: "1:919831482480:web:61853481b1304c1649a4b5",
  measurementId: "G-YVHV4GNLHZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
