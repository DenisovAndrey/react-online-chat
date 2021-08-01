import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../containers/Navbar';
import AppRouter from '../../library/utils/routing/AppRouter';
import { AuthProvider } from '../../library/context/useAuthContext';

export const App = () => (
	<AuthProvider>
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<AppRouter />
			</div>
		</BrowserRouter>
	</AuthProvider>
);
