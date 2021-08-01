import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';
import { firestore } from '../../../library/utils/firebase/firebase';
import IMessage from '../interfaces/IMessage';

type User = firebase.User;

export const useMessages = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, isLoading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'));

  const sendMessage = async (user: User) => {
    const message: IMessage = {
      uid: uuidv4(),
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: {
        uid: user.uid,
        displayName: user.displayName,
        avatar: user.photoURL,
      },
    };
    firestore.collection('messages').add(message);
    setNewMessage('');
  };

  return { newMessage, setNewMessage, sendMessage, messages, isLoading };
};
