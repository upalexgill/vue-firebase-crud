import firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAOvKza4oE5mPSg9eHwt6t_jn1cuETYijI",
  authDomain: "smart-abacus-290523.firebaseapp.com",
  databaseURL: "https://smart-abacus-290523-default-rtdb.firebaseio.com",
  projectId: "smart-abacus-290523",
  storageBucket: "smart-abacus-290523.appspot.com",
  messagingSenderId: "907441566826",
  appId: "1:907441566826:web:53dcf983e76088d5f1c613",
};

firebase.initializeApp(config);

export default firebase.database();
