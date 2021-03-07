import firebase from "firebase";

export const firebaseCurrentUser = async () => {
  try {
    const user = await firebase.auth().currentUser;
    const userInfo = {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
    localStorage.setItem("uid", userInfo.uid);
    return userInfo;
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
        localStorage.setItem("token", `Bearer ${idToken}`);
      });
    return data;
  } catch (error) {
    throw error;
  }
};
