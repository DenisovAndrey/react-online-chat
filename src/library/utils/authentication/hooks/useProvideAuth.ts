import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { auth, googleAuthProvider } from '../../firebase/firebase';

export interface IProvideAuth {
  user: User | null;
  signin: () => Promise<User | null>;
  signout: () => void;
}

type UserCredential = firebase.auth.UserCredential
type User = firebase.User;

export const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (): Promise<User | null> => auth.signInWithPopup(googleAuthProvider)
    .then((response: UserCredential) => {
      setUser(response.user);
      return response.user;
    });

  const signout = () => firebase
    .auth()
    .signOut()
    .then(() => {
      setUser(null);
    });

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

  return {
    user,
    signin,
    signout,
  };
};
