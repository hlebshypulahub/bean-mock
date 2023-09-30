import { PropsWithChildren, createContext, useEffect, useReducer } from 'react';
import { initialState, IAuthState } from './initialState';
import { reducer } from './reducer';
import { Types } from './types';

export const AuthContext = createContext({
  ...initialState,

  login: (user) => {}
});

export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const login = (user) => {
    dispatch({ type: Types.Login, payload: user });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
