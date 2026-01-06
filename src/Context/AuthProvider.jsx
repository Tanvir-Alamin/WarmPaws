import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const getUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => getUser();
  }, []);

  const signOutFromAll = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    googleSignIn,
    user,
    setUser,
    loading,
    signOutFromAll,
    emailSignUp,
    emailSignIn,
    update,
    setUpdate,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
