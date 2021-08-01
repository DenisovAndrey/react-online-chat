import React, { FC } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import IUser from '../../../../modules/Chat/interfaces/IUser';
import styles from './UserPreview.module.scss';

export const UserPreview: FC<IUser> = ({ avatar, displayName }) => (
		<Grid className={styles.userPreview} container justifyContent={'flex-start'} alignItems={'center'}>
			{avatar !== null && avatar !== undefined
			  ? <Avatar data-testid="customAvatar" src={avatar} />
			  : <Avatar data-testid="defaultAvatar">{displayName?.charAt(0)}</Avatar>}
			<span className={styles.userName}>{displayName}</span>
		</Grid>
);
