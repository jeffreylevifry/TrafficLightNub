import Firebase from "firebase";
import "firebase/firestore";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyBjrkzgTVZyNcrA2KrzTQ-wsBKwlOnSBcM",
  authDomain: "traffic-light-e5086.firebaseapp.com",
  databaseURL: "https://traffic-light-e5086.firebaseio.com",
  projectId: "traffic-light-e5086",
  storageBucket: "traffic-light-e5086.appspot.com",
  messagingSenderId: "892280357071"
});

const db = firebaseApp.database();
const sfBg = db.ref("lanes/sf/backgroundColor");
const hpzBg = db.ref("lanes/hpz/backgroundColor");
const latexBg = db.ref("lanes/latex/backgroundColor");
const flatbedBg = db.ref("lanes/flatbed/backgroundColor");
const finishingBg = db.ref("lanes/finishing/backgroundColor");
const lfbwBg = db.ref("lanes/lfbw/backgroundColor");

export { db, sfBg, hpzBg, latexBg, flatbedBg, finishingBg, lfbwBg };
