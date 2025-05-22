import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Skapa användare med email och password.
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Logga in användare med email och password.
export const doSignInUserWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Logga in med google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Logga ut användare
export const doSignOut = async () => {
  try {
    const result = auth.signOut();
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
