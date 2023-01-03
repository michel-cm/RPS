import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { Api } from "../services/Api";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, email } = user;
        setUser({
          id: uid,
          email: email,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function logoutAccount() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function loginWithEmail(email, senha) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          id: user.uid,
          email: user.email,
        });
      })
      .catch((error) => {
        alert("Email ou senha incorreta");
      });
  }

  async function handleUpdatePassowrd() {
    await Api.updatePassword("alessandramab@hotmail.com");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logoutAccount,
        loginWithEmail,

        handleUpdatePassowrd,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
