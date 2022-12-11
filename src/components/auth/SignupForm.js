import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      navigate('/signin');
      if (!response.ok) {
        throw Error(data.error);
      }
     
    } catch (err) {
      console.log(err.message);
    }
    
  };

  return (
    <div class='sign-up'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='Tsignup'>Sign up</h2>
      <div class="content1">
       <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Name must not be empty</FormInputError>
      )}
      <TextInput
        label="UserName"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>UserName must not be empty</FormInputError>
      )}
      <TextInput
        label="Email"
        type="text"
        name="email"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.name && (
        <FormInputError>Email must not be empty</FormInputError>
      )}

    
      <TextInput
        label="Password"
        type="password"
        name="Password"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}
       <TextInput
        label="Address"
        type="text"
        name="Address"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Address must not be empty.</FormInputError>
      )}
       <TextInput
        label="DOB"
        type="text"
        name="DOB"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>DOB must not be empty.</FormInputError>
      )}
       <TextInput
        label="Gender"
        type="text"
        name="Gender"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Gender must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        class="button"
      >
        Signup
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/0b/7f/67/0b7f675fdc086388cd8dd971fde90d0c.jpg" class="sign-up-photo"></img>
     
      
    </form>
    </div>
  );
};

export default SignupForm;
