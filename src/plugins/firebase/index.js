import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

export const firebaseConfig = {
	apiKey: "AIzaSyBDD-ctCHeOB7lxtzkwml7qsszGcnf9fRo",
	authDomain: "subity-m.firebaseapp.com",
	projectId: "subity-m",
	storageBucket: "subity-m.appspot.com",
	messagingSenderId: "816148826779",
	appId: "1:816148826779:web:b182c5cadf2959628dd43e",
	measurementId: "G-J7L6HQC5Z5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
