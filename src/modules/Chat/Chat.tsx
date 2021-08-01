import React, { FC } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import firebase from 'firebase';
import { useAuth } from '../../library/utils/authentication/hooks/useAuth';
import { IProvideAuth } from '../../library/utils/authentication/hooks/useProvideAuth';
import IMessage from './interfaces/IMessage';
import { Message } from './components/Message';
import styles from './Chat.module.scss';
import { Loader } from '../../library/common/components/Loader';
import { useMessages } from './hooks/useMessages';

type User = firebase.User;

export const Chat: FC = () => {
  const { user } = useAuth() as IProvideAuth;
  const { newMessage, setNewMessage, sendMessage, messages, isLoading } = useMessages();

  if (isLoading) {
  	return <Loader />;
  }

  return (
		<Container>
			<Grid container justifyContent={'center'}>
				{messages !== undefined
				  ? (
						<div className={styles.chat}>
							{(messages as unknown as IMessage[]).map((message) => (
								<div className={`${styles.chat__message} ${message.user !== undefined && user?.uid === message.user.uid ? styles.chat__message_currentUser : ''}`}>
									<Message {...message} />
								</div>
							))}
						</div>
				  )
				  :	<div className={styles.chat}>Empty</div>}
				<Grid container direction={'column'} alignItems={'flex-end'} style={{ width: '80%' }}>
					<TextField
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						variant={'outlined'}
						fullWidth
						rowsMax={4}
						style={{ marginTop: '10px' }}
					/>
					<Button onClick={() => sendMessage(user as User)}>Send</Button>
				</Grid>
			</Grid>
		</Container>
  );
};
