import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import CardActions from '../../UI/card/CardActions';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
// import SiginForm from './SiginForm';

const SigninButtons = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async () => {
   navigate(`/signinForm`);
  };
  const submitHandler1 = async () => {
    navigate(`/Asignin`);
   };

  return (
   <div>
    <button
      class ="cardButton1"
      onClick={submitHandler}
    >
     User 
    </button>
    <button
      class ="cardButton2"
      onClick={submitHandler1}
    >
      Admin
    </button>
    </div>
  );
};

export default SigninButtons;
