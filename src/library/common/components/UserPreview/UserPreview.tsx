import React, { FC } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import IUser from '../../../../pages/Chat/interfaces/IUser';
import styles from './UserPreview.module.scss';

export interface IUserProps{
	user: IUser;
}

export const UserPreview: FC<IUserProps> = ({ user: { avatar, displayName } }) => (
	<Grid className={styles.userPreview} container justifyContent={'flex-start'} alignItems={'center'}>
		{avatar ? (
			<Avatar data-testid="customAvatar" src={avatar} />
		) : (
			<Avatar data-testid="defaultAvatar">{displayName?.charAt(0)}</Avatar>
		)}
		<span className={styles.userName}>{displayName}</span>
	</Grid>
);
