import { createContext } from 'react';

//We  define our context with empty data for better code completion later on
const AuthContext = createContext({
  username: '',
  id: '',
  token: '',
  type:'',
  login: (id, username, token,type) => {},
  logout: () => {}
});

export default AuthContext;
