import firebase from "firebase";

export const firebaseCurrentUser = async () => {
	try {
		const user = firebase.auth().currentUser;
		return user;
	} catch (error) {
		throw error;
	}
};
