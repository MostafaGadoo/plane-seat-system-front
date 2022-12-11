import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const FeedbackForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
    
  };

  return (
    <div class='Feedback'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='Tsignup'>Feedback</h2>
      <div class="content1">
       <TextInput
        label="Description"
        type="text"
        name="description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Description must not be empty</FormInputError>
      )}
      <TextInput
        label="Date"
        type="text"
        name="date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Date must not be empty</FormInputError>
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
        label="Ticket_id"
        type="text"
        name="Ticket_id"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Ticket_id must not be empty.</FormInputError>
      )}
      
      <button
        type="submit"
        class="button"
      >
        Submit
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/1e/ac/ea/1eaceabc22ff60dd0f9a76f015715b8b.jpg" class="Feedback-photo"></img>
     
      
    </form>
    </div>
  );
};

export default FeedbackForm;
