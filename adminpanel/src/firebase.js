import firebase from "firebase";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtKNK6BeAvZBMvZ_46EkdMznyE1_BHchY",
  authDomain: "netflix-76d86.firebaseapp.com",
  projectId: "netflix-76d86",
  storageBucket: "netflix-76d86.appspot.com",
  messagingSenderId: "301124112499",
  appId: "1:301124112499:web:548bfc8f06415aa121da06",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
