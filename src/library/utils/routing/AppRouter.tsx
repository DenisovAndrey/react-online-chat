import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { IRout, privatRoutes, publicRoutes } from './routes';
import { useAuthContext } from '../../context/useAuthContext';
import { Routes } from './RoutesEnum';

const AppRouter: FC = () => {
  const auth = useAuthContext();

  return auth.user ? (
		<Switch>
			{privatRoutes.map((rout: IRout) => (
				<Route path={rout.path} key={rout.path} component={rout.Component} exact />
			))}
			<Redirect to={Routes.MAIN} />
		</Switch>
  ) : (
		<Switch>
			{publicRoutes.map((rout: IRout) => (
				<Route path={rout.path} key={rout.path} component={rout.Component} exact />
			))}
			<Redirect to={Routes.MAIN} />
		</Switch>
  );
};

export default AppRouter;
