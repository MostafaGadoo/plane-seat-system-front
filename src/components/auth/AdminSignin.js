import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';


const AdminSignin = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Admins/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Cannot login please try again");
      }

      // invoke the login function in our auth context
      authContext.login(data.userId, data.username, data.jwt,data.type);

      // navigate to the home page
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      
      onSubmit={handleSubmit(submitHandler)}
    >
      <div class='sign-in'>
      <div class="format">
      <h2 class='Title'>Sign in</h2>
      <div class="content">
      <TextInput
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Username must not be empty.</FormInputError>
      )}

      <TextInput
        label="Password"
        type="password"
        name="password"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        class="button"

      >
        Sign in
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/e1/c4/ef/e1c4ef856ac9decdf21eebe298a40f6e.jpg" class="sign-in-photo"></img>
     
      </div>
    </form>
  );
};

export default AdminSignin;
