import firebase from "firebase";

export const firebaseGetToken = async () => {
	try {
		const data = await firebase
			.auth()
			.currentUser.getIdToken(true)
			.then((idToken) => {
				localStorage.setItem("token", idToken);
			});
		return data;
	} catch (error) {
		throw error;
	}
};
