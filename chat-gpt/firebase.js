import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBcWWv9VBuQDF_hiOY8r9c_YAjV5JkUF5A",
    authDomain: "whatapp-clone-a4c7c.firebaseapp.com",
    databaseURL: "https://whatapp-clone-a4c7c-default-rtdb.firebaseio.com",
    projectId: "whatapp-clone-a4c7c",
    storageBucket: "whatapp-clone-a4c7c.appspot.com",
    messagingSenderId: "837402879588",
    appId: "1:837402879588:web:e9cd2984b1c9257b99e171",
    measurementId: "G-2CK1R7FG23"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleHandler = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);

        })
        .catch((error) => {
            console.log(error);
        });
}

const signout = () => {
    signOut(auth);
}
export { auth, provider, googleHandler, signout };