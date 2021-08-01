import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import cn from 'classnames';
import IMessage from '../../interfaces/IMessage';
import { UserPreview } from '../../../../library/common/components/UserPreview';
import styles from './Message.module.scss';
import { useAuthContext } from '../../../../library/context/useAuthContext';

export interface IMessageProps {
	message: IMessage;
}

export const Message: FC<IMessageProps> = ({ message: { user, text } }) => {
  const { user: currentUser } = useAuthContext();

  return (
		<div
			className={cn(styles.message, user && currentUser?.uid === user.uid && styles.message__currentUser)}
		>
			<Grid container>
				<UserPreview data-testid="userPreview" user={user} />
			</Grid>
			<div className={styles.message__text}>{text}</div>
		</div>
  );
};
