import React, { FC } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

export const Loader: FC = () => (
		<Grid container justifyContent={'center'}>
			<CircularProgress disableShrink size={80} />
		</Grid>
);
