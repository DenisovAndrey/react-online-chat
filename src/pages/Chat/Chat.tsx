import React, { FC } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import cn from 'classnames';
import { useAuthContext } from '../../library/context/useAuthContext';
import IMessage from './interfaces/IMessage';
import { Message } from './components/Message';
import styles from './Chat.module.scss';
import { Loader } from '../../library/common/components/Loader';
import { useMessages } from './hooks/useMessages';
import { FirebaseUser } from '../../library/utils/firebase/firebase';

export const Chat: FC = () => {
  const { user } = useAuthContext();
  const { newMessage, setNewMessage, sendMessage, messages, isLoading } = useMessages();

  if (isLoading) {
    return <Loader />;
  }

  return (
		<Container>
			<Grid container justifyContent={'center'}>
				{messages ? (
					<div className={styles.chat}>
						{(messages as unknown as IMessage[]).map((message) => (
							<div
								className={cn(
								  styles.chat__message,
								  message.user !== undefined
										&& user?.uid === message.user.uid
										&& styles.chat__message_currentUser,
								)}
							>
								<Message message={message} />
							</div>
						))}
					</div>
				) : (
					<div className={styles.chat}>Empty</div>
				)}
				<Grid container direction={'column'} alignItems={'flex-end'} style={{ width: '80%' }}>
					<TextField
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						variant={'outlined'}
						fullWidth
						rowsMax={4}
						style={{ marginTop: '10px' }}
					/>
					<Button onClick={() => sendMessage(user as FirebaseUser)}>Send</Button>
				</Grid>
			</Grid>
		</Container>
  );
};
