import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  userType: null
});

export default AuthContext;