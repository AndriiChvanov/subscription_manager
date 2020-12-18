import firebase from "firebase";

export const firebaseCurrentUser = async () => {
	try {
		const user = firebase.auth().currentUser.providerData;
		console.log(user);
		return user;
	} catch (error) {
		throw error;
	}
};

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
