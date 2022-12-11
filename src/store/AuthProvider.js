import AuthContext from './authContext';

import { useState } from 'react';

const AuthProvider = (props) => {
  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');
  const [type,setType]=useState('');

  const authContext = {
    username: username,
    id: id,
    token: token,
    type:type,
    login: (id, username, token,type) => {
      setID(id);
      setUsername(username);
      setToken(token);
      setType(type)
    },
    logout: () => {
      setUsername('');
      setID('');
      setToken('');
      setType('');
    }
    
  };


  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
    
  );
};
export default AuthProvider;
