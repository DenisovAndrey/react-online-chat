import React, { FC } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useAuth } from '../../library/utils/authentication/hooks/useAuth';
import { IProvideAuth } from '../../library/utils/authentication/hooks/useProvideAuth';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const auth = useAuth() as IProvideAuth;

  return (
	<div style={{ height: '70px' }}>
		<AppBar position="static">
			<Toolbar>
				<Grid container justifyContent={'space-between'} alignItems={'center'}>
					<div>
						<Link to="/">
							<Grid data-testid="logo" container justifyContent={'space-between'} alignItems={'center'}>
								<span>Share Your Thoughts</span>
								<AssignmentTurnedInIcon />
							</Grid>
						</Link>
					</div>
					{auth.user !== null
					  ? (
							<div>
								<Link className={styles.navbar__link} to="/topics">
									Topics
								</Link>
								<Link className={styles.navbar__link} to="/friends">
									Friends
								</Link>
								<Link className={styles.navbar__link} to="/chat">
									Chat
								</Link>
							</div>

					  ) : ''}

					<div>
						{auth.user !== null
						  ? <Button variant={'contained'} onClick={() => auth.signout()}>Logout</Button>
						  : <Button variant={'contained'} onClick={() => auth.signin()}>Login</Button>}
					</div>
				</Grid>
			</Toolbar>
		</AppBar>
	</div>
  );
};
