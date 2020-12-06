import firebase from "firebase";

const authSignUp = (action) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(action.email, action.password)
		.then((user) => {
			console.log("SIGN_UP");
		})
		.catch((error) => {});
};

export { authSignUp };
