import React, { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase';
import { auth, FirebaseUser, googleAuthProvider } from '../utils/firebase/firebase';

type UserCredential = firebase.auth.UserCredential;

interface IAuthContext {
	user: FirebaseUser | null;
	signIn(): void;
	signOut(): void;
}

export const authContext = createContext<IAuthContext>({
  user: null,
  signIn() {},
  signOut() {},
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const signIn = useCallback(
    () => auth.signInWithPopup(googleAuthProvider).then((response: UserCredential) => {
      setUser(response.user);
      return response.user;
    }),
    [],
  );

  const signOut = useCallback(
    () => firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      }),
    [],
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    [user],
  );

  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

export const useAuthContext = () => useContext(authContext);
