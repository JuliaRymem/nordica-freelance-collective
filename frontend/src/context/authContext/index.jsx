import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  doCreateUserWithEmailAndPassword,
  doSignInUserWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
} from "../../firebase/auth";

// Global 'variabel'
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  // State som kommer användas av children.
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initializeuser = async (user) => {
    if (user) {
      // Om user finns, läggs all information till i currentuser och loggedin blir true.
      setCurrentUser({ ...user });
      setIsUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsUserLoggedIn(false);
    }
    //Ladnings fasen är över
    setIsLoading(false);
  };
  /*onAuthStateChanged kommer från Firebase och lyssnar på om användaren loggar in eller ut.
    så när auth ändras så körs initializeuser som en callback*/
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeuser);
    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    isUserLoggedIn,
    isLoading,
    doCreateUserWithEmailAndPassword,
    doSignInUserWithEmailAndPassword,
    doSignInWithGoogle,
    doSignOut,
  };

  return (
    <authContext.Provider value={value}>
      {!isLoading && children}
    </authContext.Provider>
  );
};
