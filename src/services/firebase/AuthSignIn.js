import firebase from "firebase";

const authSignIn = (email, password) =>
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			console.log(user);
		})
		.catch((error) => {});

export { authSignIn };
