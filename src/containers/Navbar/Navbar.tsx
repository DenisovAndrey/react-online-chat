import React, { FC } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useAuthContext } from '../../library/context/useAuthContext';
import styles from './Navbar.module.scss';
import { Routes } from '../../library/utils/routing/RoutesEnum';

export const Navbar: FC = () => {
  const auth = useAuthContext();

  return (
		<div style={{ height: '70px' }}>
			<AppBar position="static">
				<Toolbar>
					<Grid container justifyContent={'space-between'} alignItems={'center'}>
						<div>
							<Link to="/">
								<Grid
									data-testid="logo"
									container
									justifyContent={'space-between'}
									alignItems={'center'}
								>
									<span>Share Your Thoughts</span>
									<AssignmentTurnedInIcon />
								</Grid>
							</Link>
						</div>
						{auth.user ? (
							<div>
								<Link className={styles.navbar__link} to={Routes.TOPICS}>
									Topics
								</Link>
								<Link className={styles.navbar__link} to={Routes.FRIENDS}>
									Friends
								</Link>
								<Link className={styles.navbar__link} to={Routes.CHAT}>
									Chat
								</Link>
							</div>
						) : (
						  ''
						)}

						<div>
							{auth.user ? (
								<Button variant={'contained'} onClick={auth.signOut}>
									Logout
								</Button>
							) : (
								<Button variant={'contained'} onClick={auth.signIn}>
									Login
								</Button>
							)}
						</div>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
  );
};
