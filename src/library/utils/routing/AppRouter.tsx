import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { IRout, privatRoutes, publicRoutes } from './routes';
import { useAuth } from '../authentication/hooks/useAuth';
import { IProvideAuth } from '../authentication/hooks/useProvideAuth';
import { Routes } from './RoutesEnum';

const AppRouter: FC = () => {
  const auth = useAuth() as IProvideAuth;

  return auth.user !== null
    ? (
			<Switch>
				{
					privatRoutes.map(
					  (rout: IRout) => <Route path={rout.path} key={rout.path} component={rout.Component} exact />,
					)
				}
				<Redirect to={Routes.MAIN} />
			</Switch>
    )
    :		(
			<Switch>
				{
					publicRoutes.map(
					  (rout: IRout) => <Route path={rout.path} key={rout.path} component={rout.Component} exact />,
					)
				}
				<Redirect to={Routes.MAIN} />
			</Switch>
    );
};

export default AppRouter;
