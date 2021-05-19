import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQeMSi3JBohBSLyV-ciy42y1fIEQUuCYg",
  authDomain: "chris-carr-co.firebaseapp.com",
  projectId: "chris-carr-co",
  storageBucket: "chris-carr-co.appspot.com",
  messagingSenderId: "807512207095",
  appId: "1:807512207095:web:9000b39bbeba4603b42df2",
  measurementId: "G-PSX63VH79H",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
