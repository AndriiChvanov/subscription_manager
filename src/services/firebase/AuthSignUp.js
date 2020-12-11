import firebase from "firebase";

const authSignUp = async (email, password) => {
	try {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
			});
	} catch (err) {
		throw err;
	}
};

export { authSignUp };
