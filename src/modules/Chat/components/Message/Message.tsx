import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import IMessage from '../../interfaces/IMessage';
import { UserPreview } from '../../../../library/common/components/UserPreview';
import styles from './Message.module.scss';
import { useAuth } from '../../../../library/utils/authentication/hooks/useAuth';
import { IProvideAuth } from '../../../../library/utils/authentication/hooks/useProvideAuth';

export const Message: FC<IMessage> = ({ user, text, createdAt, uid }) => {
  const { user: currentUser } = useAuth() as IProvideAuth;

  return (
		<div className={`${styles.message} ${user !== undefined && currentUser?.uid === user.uid ? styles.message__currentUser : ''}`}>
			<Grid container>
				<UserPreview data-testid="userPreview" {...user} />
			</Grid>
			<div className={styles.message__text}>{text}</div>
		</div>
  );
};
