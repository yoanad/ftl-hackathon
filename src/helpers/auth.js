import { auth } from "../services/firebase";

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signOut() {
    return auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Successfully logged out")
      }).catch(function(error) {
        // An error happened.
        console.log(" An error happened.")
      });
}