import firebase from "firebase";

export const firebaseLogin = async (email, password) => {
	try {
		const data = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		return data;
	} catch (error) {
		throw error;
	}
};

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