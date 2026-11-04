import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../api";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if user exists then provide token
      if (currentUser) {
        axios
          .post(`${API_URL}/jwt`, loggedUser, { withCredentials: true })
          .catch(() => {});
      } else {
        axios
          .post(`${API_URL}/logout`, loggedUser, { withCredentials: true })
          .catch(() => {});
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    googleLogIn,
    createUser,
    user,
    Auth,
    logOut,
    signIn,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
