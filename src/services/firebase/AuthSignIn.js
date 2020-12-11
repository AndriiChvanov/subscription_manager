import firebase from "firebase";

const authSignIn = async (email, password) => {
	try {
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
			});
	} catch (err) {
		throw err;
	}
};

export { authSignIn };
