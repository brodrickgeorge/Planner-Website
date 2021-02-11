import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAjyRAsfduU7CeLiz1YUtHqNJA1VN5iM6s",
  authDomain: "skatespot-3e705.firebaseapp.com",
  projectId: "skatespot-3e705",
  storageBucket: "skatespot-3e705.appspot.com",
  messagingSenderId: "197055152057",
  appId: "1:197055152057:web:664fc80c79c7a4a8ce0068",
  measurementId: "G-7B75JF7N9K",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
