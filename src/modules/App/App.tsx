import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../containers/Navbar';
import AppRouter from '../../library/utils/routing/AppRouter';
import { ProvideAuth } from '../../library/utils/authentication/hooks/useAuth';

export const App = () => (
    <ProvideAuth>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </ProvideAuth>
);
