import firebase from "firebase";
import "firebase/database";

let config = {
  databaseURL: "https://crud-469c1-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyC8tWxi1rdIEabkCOo7zSVQaLOoWL587Is",
  authDomain: "crud-469c1.firebaseapp.com",
  projectId: "crud-469c1",
  storageBucket: "crud-469c1.appspot.com",
  messagingSenderId: "690076249772",
  appId: "1:690076249772:web:64e146a0abc34aafe3b909"
};

firebase.initializeApp(config);

export default firebase.database();
