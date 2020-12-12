import firebase from "firebase";

export const firebaseSignUp = async (email, password) => {
	try {
		const data = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		return data;
	} catch (error) {
		throw error;
	}
};
