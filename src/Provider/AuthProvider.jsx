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
          .post("https://book-beacon-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) =>
            console.log("token response from authProvider", res.data)
          );
      } else {
        axios
          .post("https://book-beacon-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) =>
            console.log("token response from logout AP", res.data)
          );
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
