import firebase from "firebase";

const authSignUp = (email, password) =>
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => {
			console.log(user);
		})
		.catch((error) => {});

export { authSignUp };
