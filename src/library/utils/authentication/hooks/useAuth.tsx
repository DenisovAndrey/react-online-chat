import React, { createContext, ReactNode, useContext } from 'react';
import { IProvideAuth, useProvideAuth } from './useProvideAuth';
import 'firebase/auth';

export const authContext = createContext({});

export function ProvideAuth({ children }: {children: ReactNode}) {
  const auth: IProvideAuth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
    {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
