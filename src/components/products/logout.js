import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';



const Logout = () => {

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

      authContext.logout();

      navigate('/');
    
  };


export default Logout;
